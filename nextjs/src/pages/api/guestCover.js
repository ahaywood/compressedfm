// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { generateGuestCoverURL, uploadGuestProfilePicIfNotExists } from 'utils/cloudinary';

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ err: 'You can only make a post request here!' });
  }
  try {
    const { title, guestName, guestImageUrl } = req.body;

    const guestImageName = await uploadGuestProfilePicIfNotExists(guestName, guestImageUrl);
    const coverUrl = await generateGuestCoverURL({ title, guestName, guestImageName });
    console.log('🚀 ~ file: guestCover.js ~ line 14 ~ coverUrl', coverUrl);
    res.status(200).json({ coverUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "I DON'T KNOW!" });
  }
};
