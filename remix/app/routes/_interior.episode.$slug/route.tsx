import type { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useState } from 'react';
import { getClient } from '~/lib/sanity';
import { IndividualEpisodeQuery } from '~/queries/Queries';
import { VerticalDivider } from '~/components/VerticalDivider';
import { EpisodeGrid } from '~/components/EpisodeGrid/EpisodeGrid';
import { Podcatchers } from '~/components/Podcatchers';
import { EpisodeSummary } from './EpisodeSummary';
import { WaveformPlayer } from '~/components/AudioPlayer/WaveformPlayer';
import { Guest } from './Guest';
import { JumpLinks } from './JumpLinks';
import { Links } from './Links';
import { Sponsors } from './Sponsors';
import { Newsletter } from '~/components/Newsletter';

export const loader = async ({ params }: LoaderArgs) => {
  const slug = params.slug;
  const episode = await getClient().fetch(IndividualEpisodeQuery, { slug });
  return { episode };
};

export default function IndividualEpisode() {
  const { episode } = useLoaderData();

  // state
  const [skipTo, setSkipTo] = useState<string | null>(null);
  console.log({ skipTo });

  // jump to a specific time on the waveform player
  const skipToTimestamp = (time: string) => {
    setSkipTo(time);
  };

  return (
    <section>
      <EpisodeSummary
        className="my-0 mx-auto max-w-pageWidth relative"
        title={episode.title}
        briefDescription={episode.briefDescription}
        episodeNumber={episode.episodeNumber}
        publishedAt={episode.publishedAt}
      />
      <div className="my-[60px] text-center">
        <WaveformPlayer
          artwork={episode.episodeCover.asset.url}
          episodeTitle={episode.title}
          audioPath={episode.audioPath}
          episodeNumber={episode.episodeNumber}
          skipTo={episode.skipTo}
        />
      </div>
      <VerticalDivider />

      <div className="grid grid-cols-1 gap-x-5 mx-auto max-w-pageWidth py-0 px-mobilePadding relative md:grid-cols-[2fr_1fr] regular:p-0">
        <main>
          {/* GUEST */}
          {episode.guest && episode.guest.length > 0 && <Guest guest={episode.guest} className="mb-[200px]" />}

          <div className="grid grid-cols-1 gap-x-5 mb-[75px] md:grid-cols-2">
            {/* TIME JUMP LINKS */}
            {episode.timeJump && (
              <JumpLinks className="mb-[75px] md:mb-0" timeJump={episode.timeJump} handleClick={skipToTimestamp} />
            )}

            {/* SHOW LINKS */}
            {episode.listLink && <Links listLink={episode.listLink} className="links" />}
          </div>

          {/* TRANSCRIPT */}
          {/* {episodeTranscript?.transcript && (
            <FullTranscript
              className="mb-[200px]"
              handleClick={skipToTimestamp}
              transcript={episodeTranscript.transcript}
            />
          )} */}
        </main>

        {/* SPONSORS */}
        <aside className="sponsor-list">
          {episode.sponsor && <Sponsors className="pb-[60px]" sponsor={episode.sponsor} />}
        </aside>
      </div>
      <VerticalDivider />

      {/* PODCATCHERS */}
      <Podcatchers className="my-[65px]" />
      <VerticalDivider />

      {/* EPISODE GRID */}
      {episode.relatedEpisodes && (
        <>
          <EpisodeGrid header="Related Episodes" episodes={episode.relatedEpisodes} />
          <VerticalDivider />
        </>
      )}

      {/* NEWSLETTER */}
      <Newsletter />
    </section>
  );
}
