// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { updateEpisode } from 'utils/client';
import { generateSocialCoverForEpisode, generateCoverForEpisode, generateWaveformForEpisode } from 'utils/coverImages';

export default async (req, res) => {
  console.info('Sanity callback');
  const episode = req.body;
  if (!episode || !episode._id) {
    console.warn('Insuffient episode data');
    return res.status(200).json({ msg: 'Nothing to see here.' });
  }
  const { _id: episodeId, waveform, automationFailed, title, audioPath } = episode;

  if (automationFailed) {
    console.info('Ignoring automation after a previous failed attempt');
    return res.status(200).json({ msg: 'Automation was ignored after a previous failed attempt' });
  }
  try {
    if (audioPath && !waveform) {
      console.info(`Generating waveform for '${episode.title}'`);
      await generateWaveformForEpisode(episode);
      console.info(`Waveform generated for '${title}'`);
    } else {
      console.info(`Episode '${title}' doesn't have an audio path or already has a waveform.`);
    }

    if (!episode.socialCover) {
      console.info(`Generating social cover image for ${title}`);
      await generateSocialCoverForEpisode(episode);
      console.info(`Social cover image generated for ${title}`);
    } else {
      console.info(`Episode ${title} already has a social cover.`);
    }

    if (!episode.episodeCover) {
      console.info(`Generating episode cover image for ${title}`);
      await generateCoverForEpisode(episode);
      console.info(`Episode cover image generated for ${title}`);
    } else {
      console.info(`Episode ${title} already has a episode cover.`);
    }

    console.info(`Automation successfully applied to ${title}`);

    return res.status(200).json({ msg: 'Updated appropriate information successfully' });
  } catch (err) {
    console.error(err);
    updateEpisode(episodeId, { automationFailed: true });
    return res.status(500).json({ msg: `I don't know...` });
  }
};
