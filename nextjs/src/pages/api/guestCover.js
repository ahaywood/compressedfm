// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { generateGuestCoverURL } from 'utils/coverImages';

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ err: 'You can only make a post request here!' });
  }
  try {
    const { title, guestName, guestImageURL } = req.body;

    if (!title || !guestName || !guestImageURL) {
      return res.status(400).json({ msg: 'Make sure to include required fields: title, guestName, and guestImageURL' });
    }

    const coverUrl = await generateGuestCoverURL({ title, guestName, guestImageURL });
    console.log(coverUrl);
    res.status(200).json({ coverUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "I DON'T KNOW!" });
  }
};
