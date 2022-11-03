import { getGuestById, sanityImageBuilder } from './client';
import { cloudinary } from './cloudinary';

const getGuestTitleTextTransformation = (title) => {
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

const getEpisodeTitleTextTransformation = (title) => {
  const y = ((title.length % 20) * 4 + 20).toString();
  return {
    overlay: {
      font_family: 'Montserrat',
      font_size: 40,
      font_weight: 900,
      text: title,
      text_align: 'center',
    },
    width: 500,
    color: '#ffffff',
    y,
    x: '-210',
    crop: 'fit',
  };
};

const getGuestImageTransformation = (guestImageName) => ({
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

const getGuestNameTransformations = (firstName, lastName) => [
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
const uploadGuestProfilePicIfNotExists = async (guestName, guestImageURL) => {
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

const generateGuestCoverURL = async ({ title, guestName, guestImageURL }) => {
  const guestImageName = await uploadGuestProfilePicIfNotExists(guestName, guestImageURL);
  const titleWithoutGuestName = title.replace(` with ${guestName}`, '');
  const titleText = getGuestTitleTextTransformation(titleWithoutGuestName);
  const guestImage = getGuestImageTransformation(guestImageName);
  const [firstName, lastName] = guestName.split(' ');

  const guestNameTransformations = getGuestNameTransformations(firstName, lastName);
  const url = cloudinary.url('compressed/social_base_1080p', {
    transformation: [titleText, guestImage, ...guestNameTransformations],
  });
  return url;
};

const generateEpisodeCoverURL = async ({ title, guestName, guestImageURL, episodeNumber, date, hosts }) => {
  const guestImageName = await uploadGuestProfilePicIfNotExists(guestName, guestImageURL);
  const titleWithoutGuestName = title.replace(` with ${guestName}`, '');
  const baseY = (title.length % 20) * 10 + 300;
  const titleY = baseY.toString();
  const nameY = ((title.length % 20) * 5 + baseY + 400).toString();
  const transformation = [
    {
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
    },
    {
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
    },
    {
      overlay: {
        font_family: 'Montserrat',
        font_size: 360,
        font_weight: 900,
        text: episodeNumber,
        text_align: 'center',
      },
      width: 2600,
      color: '#B6B6B6',
      y: -1100,
      x: '0',
      crop: 'fit',
    },
  ];
  const url = cloudinary.url('compressed/episode-cover-base', {
    transformation,
  });
  return url;
};

const generateGuestCoverURLFromEpisode = async (episode) => {
  const { _ref: guestId } = episode.guest[0];
  const { avatar, title: guestName } = await getGuestById(guestId);
  const guestImageURL = sanityImageBuilder.image(avatar).url();
  const imageUrl = await generateGuestCoverURL({ title: episode.title, guestName, guestImageURL });
  console.info('🚀 ~ file: coverImages.js ~ line 124 ~ generateSocialCoverUrl ~ imageUrl', imageUrl);
  return imageUrl;
};

export { generateGuestCoverURLFromEpisode, generateGuestCoverURL, generateEpisodeCoverURL };
