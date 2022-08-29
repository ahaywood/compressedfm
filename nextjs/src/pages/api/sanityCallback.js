// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getWaveformURLForAudio, uploadAudioFromEpisode } from 'utils/cloudinary';
import { addWaveformToEpisode } from 'utils/sanity';

export default async (req, res) => {
  console.log('hehe');
  const episode = req.body;
  console.log(episode._id);
  if (!episode || !episode._id) {
    console.log('Insuffient episode data');
    return res.status(200).json({ msg: 'Nothing to see here.' });
  }

  try {
    console.log(episode.waveform);
    if (episode.waveform) {
      console.info(`Episode '${episode.title}' already has a waveform`);
      return res.status(200).json({ msg: 'Already hass a waveform image' });
    }

    const publicIds = await uploadAudioFromEpisode(episode);
    const waveformURL = getWaveformURLForAudio(publicIds);
    // iterate through each episodeId and add the corresponding waveformURL
    const episodeId = episode._id;
    await addWaveformToEpisode(episodeId, waveformURL);
    return res.status(200).json({ msg: 'Waveform generated and added' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: `I don't know...` });
  }
};
