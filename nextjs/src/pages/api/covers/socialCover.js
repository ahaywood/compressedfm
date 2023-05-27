// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { generateSocialCoverUrl } from 'utils/coverImages';

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ err: 'You can only make a post request here!' });
  }
  try {
    const { title, guestName, guestImageURL, hosts } = req.body;

    if (!title) {
      return res.status(400).json({ msg: 'Make sure to include a title' });
    }

    const coverUrl = await generateSocialCoverUrl({ title, guestName, guestImageURL, hosts });
    console.log(coverUrl);
    res.status(200).json({ coverUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "I DON'T KNOW!" });
  }
};
