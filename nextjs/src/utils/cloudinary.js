const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const wrapTitleWords = (title, maxLettersPerLine) => {
  let breakPoint = 0;
  for (let i = 0; i < title.length; i += 1) {
    const letter = title[i];
    if (letter === ' ') {
      breakPoint = i;
    }
    if (i >= maxLettersPerLine) {
      break;
    }
  }
  const firstLine = title.substring(0, breakPoint);
  const secondLine = title.substring(breakPoint);
  return [firstLine, secondLine];
};

const generateGuestCoverURL = ({ title, guestName, guestImageName }) => {
  const [firstLine, secondLine] = wrapTitleWords(title, 16);
  const [firstName, lastName] = guestName.split(' ');
  const url = cloudinary.url('compressed/social-cover-base', {
    transformation: [
      {
        overlay: {
          font_family: 'Montserrat',
          font_size: 66,
          font_weight: 900,
          text: title,
          text_align: 'center',
        },
        width: 500,
        color: '#ffffff',
        y: '10',
        x: '-210',
        crop: 'fit',
      },
      {
        overlay: `compressed:${guestImageName}`,
        height: '242',
        width: '242',
        y: '-50',
        x: '65',
        gravity: 'east',
        radius: 'max',
        crop: 'fill',
        border: '4px_solid_rgb:ffffff',
      },
      {
        overlay: {
          font_family: 'Montserrat',
          font_size: 55,
          text: firstName,
          font_weight: 900,
          text_align: 'center',
        },
        color: '#faff00',
        y: '120',
        x: '315',
        width: '325',
        crop: 'scale',
        gravity: 'center',
      },
      {
        overlay: {
          font_family: 'Montserrat',
          font_size: 55,
          text: lastName,
          font_weight: 900,
          text_align: 'center',
        },
        color: '#ffffff',
        y: '190',
        x: '315',
        width: '325',
        crop: 'scale',
        gravity: 'center',
      },
    ],
  });
  return url;
};

const uploadGuestProfilePicIfNotExists = async (guestName, guestImageURL) => {
  console.log(`Uploading image for${guestName}`);
  console.log(`Upload image from ${guestImageURL}`);
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

module.exports = { cloudinary, uploadGuestProfilePicIfNotExists, generateGuestCoverURL };
