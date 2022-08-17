const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const wrapTitleWords = (title, maxLettersPerLine, maxLines) => {
  if (title.length <= maxLettersPerLine) return [title];
  let breakPoint = 0;
  const lines = [];

  for (let i = 0; i < title.length; i += 1) {
    const letter = title[i];
    console.log(i);
    if (i - breakPoint >= maxLettersPerLine && letter === ' ') {
      lines.push(title.slice(breakPoint, i));
      breakPoint = i + 1;
    }
    if (lines.length === maxLines - 1 || i === title.length - 1) {
      lines.push(title.slice(breakPoint));
      console.log('break');
      break;
    }
  }
  return lines;
};

const generateGuestCoverURL = ({ title, guestName, guestImageName }) => {
  const lines = wrapTitleWords(title, 16, 4);
  console.log(lines);
  const titleTexts = lines.map((line, i) => {
    const crop = line.length < 12 ? 'fit' : 'scale';
    const y = (lines.length * -20 + 60 + i * 60).toString();
    return {
      overlay: {
        font_family: 'Montserrat',
        font_size: 50,
        font_weight: 900,
        text: line,
        text_align: 'center',
      },
      width: 500,
      color: '#ffffff',
      y,
      x: '-210',
      crop,
    };
  });
  console.log(titleTexts);
  const [firstName, lastName] = guestName.split(' ');
  const url = cloudinary.url('compressed/social-cover-base', {
    transformation: [
      ...titleTexts,
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
          font_size: 50,
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
          font_size: 50,
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
