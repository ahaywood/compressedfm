import {
  getGuestById,
  sanityImageBuilder,
  updateEpisode,
  uploadImage,
} from './sanity';
import { cloudinary, uploadAudio } from './cloudinary';
import { Episode, Guest } from '../types/types';
import { format } from 'date-fns';

const getGuestTitleTextTransformation = (title: string) => {
  const y = ((title.length % 20) * 6 + 60).toString();
  return {
    overlay: {
      font_family: 'Montserrat',
      font_size: 100,
      font_weight: 900,
      text: title,
      text_align: 'center',
    },
    width: 1000,
    color: '#ffffff',
    y,
    x: '-350',
    crop: 'fit',
  };
};

const getGuestImageTransformation = (guestImageName?: string) => ({
  overlay: `compressed:${guestImageName}`,
  height: '458',
  width: '458',
  y: '-150',
  x: '120',
  gravity: 'east',
  radius: 'max',
  crop: 'fill',
  border: '4px_solid_rgb:ffffff',
});

const getGuestNameTransformations = (firstName: string, lastName: string) => [
  {
    overlay: {
      font_family: 'Montserrat',
      font_size: 80,
      text: firstName,
      font_weight: 900,
      text_align: 'center',
    },
    crop: 'fit',
    color: '#faff00',
    background: '#1B1B1B',
    y: '180',
    x: '50',
    width: '600',
    gravity: 'east',
  },
  {
    overlay: {
      font_family: 'Montserrat',
      font_size: 80,
      text: lastName,
      font_weight: 900,
      text_align: 'center',
    },
    crop: 'fit',
    color: '#ffffff',
    background: '#1B1B1B',
    y: '270',
    x: '50',
    width: '600',
    gravity: 'east',
  },
];

//TODO: don't upload guest image if it already exists?
const uploadGuestProfilePicIfNotExists = async (
  guestName: string,
  guestImageURL: string
) => {
  console.info(`Uploading image for${guestName}`);
  console.info(`Upload image from ${guestImageURL}`);
  const guestImageName = guestName.replace(' ', '-');
  try {
    await cloudinary.uploader.upload(guestImageURL, {
      public_id: `compressed/${guestImageName}`,
    });
    return guestImageName;
  } catch (error) {
    console.error(error);
  }
};

const generateEpisodeCoverURL = async ({
  title,
  guestName,
  guestImageURL,
  episodeNumber,
  date,
  hostNames,
}: {
  title: string;
  guestName: string;
  guestImageURL: string;
  episodeNumber: string;
  date: string;
  hostNames: string[];
}) => {
  const transformation = [];

  const imageTransformations = [];
  const totalImages: number =
    hostNames.length + (guestName && guestImageURL ? 1 : 0);
  const X_VALUES_MAP: any = {
    1: [0],
    2: [-250, 250],
    3: [-475, 0, 475],
    4: [-700, -225, 225, 700],
  };

  const titleWithoutGuestName = title.replace(` with ${guestName}`, '');
  const baseY = (title.length % 20) * 10 + 300;
  const titleY = baseY.toString();

  const xValues = X_VALUES_MAP[totalImages];
  if (guestName && guestImageURL) {
    const guestImageName = await uploadGuestProfilePicIfNotExists(
      guestName,
      guestImageURL
    );
    const guestImageTransformation = {
      overlay: `compressed:${guestImageName}`,
      height: '380',
      width: '380',
      y: '1100',
      x: '',
      radius: 'max',
      crop: 'fill',
      border: '4px_solid_rgb:ffffff',
    };
    imageTransformations.push(guestImageTransformation);

    const nameY = ((title.length % 20) * 5 + baseY + 400).toString();

    const guestNameTransformation = {
      overlay: {
        font_family: 'Montserrat',
        font_size: 140,
        font_weight: 900,
        text: `With ${guestName}`,
        text_align: 'center',
      },
      width: 2600,
      color: '#B6B6B6',
      y: nameY,
      x: '0',
      crop: 'fit',
    };
    transformation.push(guestNameTransformation);
  }
  const hostImageTransformations = hostNames.map((host) => ({
    overlay: `compressed:${host}`,
    height: '380',
    width: '380',
    y: '1100',
    x: '0',
    radius: 'max',
    crop: 'fill',
    border: '4px_solid_rgb:ffffff',
  }));
  imageTransformations.push(...hostImageTransformations);
  imageTransformations.forEach((imageTransformation, i) => {
    imageTransformation.x = xValues[i];
  });

  const titleTransformation = {
    overlay: {
      font_family: 'Montserrat',
      font_size: 200,
      font_weight: 900,
      text: titleWithoutGuestName,
      text_align: 'center',
    },
    width: 2600,
    color: '#ffffff',
    y: titleY,
    x: '0',
    crop: 'fit',
  };

  const episodeNumberTransformation = {
    overlay: {
      font_family: 'Montserrat',
      font_size: 360,
      font_weight: 900,
      text: episodeNumber.padStart(3, '0'),
      text_align: 'center',
      letter_spacing: '30',
    },
    width: 2600,
    color: '#FAFF00',
    y: -1050,
    x: '0',
    crop: 'fit',
  };

  const dateTransformation = {
    overlay: {
      font_family: 'Montserrat',
      font_size: 60,
      font_weight: 300,
      text: date,
      text_align: 'left',
    },
    width: 500,
    color: '#ffffff',
    y: -1050,
    x: '560',
    crop: 'fit',
  };

  transformation.push(
    titleTransformation,
    ...imageTransformations,
    dateTransformation,
    episodeNumberTransformation
  );
  const url = cloudinary.url('compressed/episode-cover-base', {
    transformation,
  });
  return url;
};

const generateSocialCoverUrl = async ({
  title,
  guestName,
  guestImageURL,
  hostNames,
}: {
  title: string;
  guestName: string;
  guestImageURL: string;
  hostNames: string[];
}) => {
  const transformation = [];
  if (guestName && guestImageURL) {
    const [firstName, lastName] = guestName.split(' ');
    const guestImageName = await uploadGuestProfilePicIfNotExists(
      guestName,
      guestImageURL
    );
    const guestImageTransformation =
      getGuestImageTransformation(guestImageName);
    const guestNameTransformations = getGuestNameTransformations(
      firstName,
      lastName
    );

    transformation.push(guestImageTransformation, ...guestNameTransformations);
  } else {
    const Y_VALUES: any = {
      1: ['0'],
      2: ['-150', '250'],
      3: ['-200', '50', '300'],
    };
    const numHosts = hostNames.length;
    const hostImageTransformations = hostNames.map((host, i) => ({
      overlay: `compressed:${host}`,
      height: numHosts > 2 ? '200' : '350',
      width: numHosts > 2 ? '200' : '350',
      x: numHosts > 2 ? '250' : '170',
      y: Y_VALUES[numHosts][i],
      gravity: 'east',
      radius: 'max',
      crop: 'fill',
      border: '4px_solid_rgb:ffffff',
    }));

    transformation.push(...hostImageTransformations);
  }
  const titleWithoutGuestName = title.replace(` with ${guestName}`, '');
  const titleText = getGuestTitleTextTransformation(titleWithoutGuestName);

  transformation.push(titleText);
  const url = cloudinary.url('compressed/social_base_1080p', {
    transformation,
  });
  return url;
};

const generateCoverForEpisode = async (episode: Episode) => {
  const {
    _id: episodeId,
    episodeNumber,
    title,
    publishedAt,
    hosts,
    guest,
  } = episode;
  console.log(publishedAt);
  const date = format(new Date(publishedAt), 'MM.dd.yy');

  const hostRecords = await Promise.all(
    hosts.map(({ _ref }: any) => getGuestById(_ref))
  );
  const hostNames = hostRecords.map(
    ({ firstName, lastName }) => `${firstName}-${lastName}`
  );

  const config: any = {
    title,
    episodeNumber: episodeNumber.toString(),
    guestName: null,
    guestImageURL: null,
    date,
    hostNames,
  };
  if (guest && guest[0]) {
    const { _ref: guestId } = guest[0];
    const { avatar, title: guestName } = await getGuestById(guestId);
    config.guestName = guestName;
    const guestImageURL = sanityImageBuilder.image(avatar).url();
    config.guestImageURL = guestImageURL;
  }

  const imageUrl = await generateEpisodeCoverURL(config);
  const { _id: imageId } = await uploadImage(imageUrl);
  updateEpisode(episodeId, {
    episodeCover: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: imageId,
      },
    },
  });
};

const generateSocialCoverForEpisode = async (episode: Episode) => {
  const { _id: episodeId, guest, title, hosts } = episode;
  const hostRecords = await Promise.all(
    hosts.map(({ _ref }) => getGuestById(_ref))
  );
  const hostNames = hostRecords.map(
    ({ firstName, lastName }) => `${firstName}-${lastName}`
  );
  const config: any = {
    title,
    guestName: null,
    guestImageURL: null,
    hostNames,
  };

  if (guest && guest[0]) {
    const { _ref: guestId } = episode.guest[0];
    const { avatar, title: guestName } = await getGuestById(guestId.toString());
    config.guestName = guestName;
    const guestImageUrl = sanityImageBuilder.image(avatar).url();
    config.guestImageUrl = guestImageUrl;
  }

  const imageUrl = await generateSocialCoverUrl(config);
  const { _id: imageId } = await uploadImage(imageUrl);
  updateEpisode(episodeId, {
    socialCover: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: imageId,
      },
    },
  });
};

const getWaveformURLForAudio = (publicId: string) => {
  const waveformURL = cloudinary.url(`${publicId}.png`, {
    height: 200,
    width: 500,
    flags: 'waveform',
    color: '#FAFF00',
    background: 'black',
    resource_type: 'video',
  });
  const httpsUrl = waveformURL.replace('http', 'https');
  return httpsUrl;
};

const generateWaveformForEpisode = async (episode: Episode) => {
  const { _id: episodeId, audioPath, episodeNumber } = episode;
  const publicIds = await uploadAudio(audioPath, episodeNumber.toString());
  const waveFormUrl = getWaveformURLForAudio(publicIds);
  const { _id: imageId } = await uploadImage(waveFormUrl);
  updateEpisode(episodeId, {
    waveform: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: imageId,
      },
    },
  });
};

export {
  generateSocialCoverForEpisode,
  generateSocialCoverUrl,
  generateEpisodeCoverURL,
  generateCoverForEpisode,
  generateWaveformForEpisode,
};
