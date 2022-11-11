import express, { Express, Request, Response, urlencoded } from 'express';
import dotenv from 'dotenv';
import {
  generateCoverForEpisode,
  generateSocialCoverForEpisode,
  generateWaveformForEpisode,
} from './utils/coverImages';
import { updateEpisode } from './utils/sanity';
import { Episode } from './types/types';

dotenv.config();
const app: Express = express();
app.use(express.json());

const port = process.env.PORT || 3000;

type MyResponse<T> = { err: string } | { data: T };

app.post(
  '/api/sanityEpisodesCallback',
  async (req: Request, res: Response<MyResponse<any>>) => {
    console.info('Sanity callback');
    const episode = req.body as Episode;
    const {
      _id: episodeId,
      waveform,
      automationFailed,
      title,
      audioPath,
      hosts,
      socialCover,
      episodeCover,
    } = episode;

    if (!episode || !episodeId || !hosts) {
      console.warn('Insuffient episode data');
      return res.status(200).json({ data: { msg: 'Nothing to see here.' } });
    }

    if (automationFailed) {
      console.info('Ignoring automation after a previous failed attempt');
      return res.status(200).json({
        data: {
          msg: 'Automation was ignored after a previous failed attempt',
        },
      });
    }
    try {
      if (audioPath && !waveform) {
        console.info(`Generating waveform for '${episode.title}'`);
        await generateWaveformForEpisode(episode);
        console.info(`Waveform generated for '${title}'`);
      } else {
        console.info(
          `Episode '${title}' doesn't have an audio path or already has a waveform.`
        );
      }

      if (!socialCover) {
        console.info(`Generating social cover image for ${title}`);
        await generateSocialCoverForEpisode(episode);
        console.info(`Social cover image generated for ${title}`);
      } else {
        console.info(`Episode ${title} already has a social cover.`);
      }

      if (!episodeCover) {
        console.info(`Generating episode cover image for ${title}`);
        await generateCoverForEpisode(episode);
        console.info(`Episode cover image generated for ${title}`);
      } else {
        console.info(`Episode ${title} already has a episode cover.`);
      }

      console.info(`Automation successfully applied to ${title}`);

      return res.status(200).json({
        data: { msg: 'Updated appropriate information successfully' },
      });
    } catch (err) {
      console.error(err);
      updateEpisode(episodeId, { automationFailed: true });
      return res.status(500).json({ err: `I don't know...` });
    }
  }
);

app.listen(port, () => {
  console.log(`⚡️[server]: Port: ${port}`);
});
