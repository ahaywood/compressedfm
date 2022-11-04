// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getWaveformURLForAudio, uploadAudio } from 'utils/cloudinary';
import { updateEpisode } from 'utils/client';
import {
  generateEpisodeCoverURL,
  generateEpisodeCoverURLFromEpisode,
  generateGuestCoverURLFromEpisode,
} from 'utils/coverImages';

export default async (req, res) => {
  console.info('Sanity callback');
  const episode = req.body;
  if (!episode || !episode._id) {
    console.warn('Insuffient episode data');
    return res.status(200).json({ msg: 'Nothing to see here.' });
  }
  const { _id: episodeId, audioPath, episodeNumber, waveformUrl, automationFailed, title } = episode;
  const episodeUpdates = {};

  if (automationFailed) {
    console.info('Ignoring automation after a previous failed attempt');
    return res.status(200).json({ msg: 'Automation was ignored after a previous failed attempt' });
  }
  try {
    if (!waveformUrl) {
      console.info(`Generating waveform for '${episode.title}'`);
      const publicIds = await uploadAudio(audioPath, episodeNumber);
      const generatedWaveformUrl = getWaveformURLForAudio(publicIds);
      console.info('🚀 ~ file: sanityCallback.js ~ line 22 ~ waveformURL', generatedWaveformUrl);
      episodeUpdates.waveformUrl = generatedWaveformUrl;
      console.info(`Waveform generated for '${title}'`);
    } else {
      console.info(`Episode '${title}' already has a waveform in Cloudinary.`);
    }

    if (!episode.socialCoverUrl && episode.guest?.length > 0) {
      console.info(`Generating guest cover image for ${title}`);
      const socialCoverUrl = await generateGuestCoverURLFromEpisode(episode);
      episodeUpdates.socialCoverUrl = socialCoverUrl;
      console.info(`Guest cover image generated for ${title}`);
    } else {
      console.info(`Episode ${title} already has a social cover url.`);
    }

    if (!episode.episodeCoverUrl) {
      console.info(`Generating episode cover image for ${title}`);
      const episodeCoverUrl = await generateEpisodeCoverURLFromEpisode(episode);
      episodeUpdates.episodeCoverUrl = episodeCoverUrl;
      console.info(`Episode cover image generated for ${title}`);
    } else {
      console.info(`Episode ${title} already has a episode cover url.`);
    }

    if (Object.keys(episodeUpdates).length > 0) {
      await updateEpisode(episodeId, episodeUpdates);
      console.info(`Automation successfully applied to ${title}`);
    } else {
      console.info(`No changes were made to episode ${title}`);
    }
    console.info('Updated appropriate information successfully', episodeUpdates);
    return res.status(200).json({ msg: 'Updated appropriate information successfully', updates: episodeUpdates });
  } catch (err) {
    console.error(err);
    episodeUpdates.automationFailed = true;
    updateEpisode(episodeId, episodeUpdates);
    return res.status(500).json({ msg: `I don't know...` });
  }
};
