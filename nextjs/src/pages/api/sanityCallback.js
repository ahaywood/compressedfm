// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getWaveformURLForAudio, uploadAudio } from 'utils/cloudinary';
import { addWaveformToEpisode } from 'utils/client';
import { generateAndUploadGuestSocialPromo } from 'utils/coverImages';

export default async (req, res) => {
  console.log('Sanity callback');
  const episode = req.body;
  if (!episode || !episode._id) {
    console.log('Insuffient episode data');
    return res.status(200).json({ msg: 'Nothing to see here.' });
  }

  try {
    const episodeId = episode._id;

    if (!episode.waveform) {
      console.info(`Generating waveform for '${episode.title}'`);
      const publicIds = await uploadAudio(episode);
      const waveformURL = getWaveformURLForAudio(publicIds);
      console.log('🚀 ~ file: sanityCallback.js ~ line 22 ~ waveformURL', waveformURL);

      //   await addWaveformToEpisode(episodeId, waveformURL);
      console.info(`Waveform generated for '${episode.title}'`);
    } else {
      console.info(`Episode '${episode.title}' already has a waveform image.`);
    }

    if (!episode.socialCover && episode.guest?.length > 0) {
      //   console.info(`Generating guest cover image for ${episode.title}`);
      //   generateAndUploadGuestSocialPromo(episode);
      //   console.info(`Guest cover image generated for ${episode.title}`);
    }

    return res.status(200).json({ msg: 'Updated appropriate information successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: `I don't know...` });
  }
};
