import { getGuestById, sanityImageBuilder } from './client';
import { cloudinary } from './cloudinary';

const getTitleTextTransformation = (title) => {
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
  height: '242',
  width: '242',
  y: '-50',
  x: '65',
  gravity: 'east',
  radius: 'max',
  crop: 'fill',
  border: '4px_solid_rgb:ffffff',
});

const getGuestNameTransformations = (firstName, lastName) => [
  {
    overlay: {
      font_family: 'Montserrat',
      font_size: 40,
      text: firstName,
      font_weight: 900,
      text_align: 'center',
    },
    crop: 'fit',
    color: '#faff00',
    y: '120',
    x: '315',
    width: '325',
    gravity: 'center',
  },
  {
    overlay: {
      font_family: 'Montserrat',
      font_size: 40,
      text: lastName,
      font_weight: 900,
      text_align: 'center',
    },
    crop: 'fit',
    color: '#ffffff',
    y: '170',
    x: '315',
    width: '325',
    gravity: 'center',
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
  const titleText = getTitleTextTransformation(titleWithoutGuestName);
  const guestImage = getGuestImageTransformation(guestImageName);
  const [firstName, lastName] = guestName.split(' ');
  const guestNameTransformations = getGuestNameTransformations(firstName, lastName);
  const url = cloudinary.url('compressed/social-cover-base', {
    transformation: [titleText, guestImage, ...guestNameTransformations],
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

export { generateGuestCoverURLFromEpisode, generateGuestCoverURL };
