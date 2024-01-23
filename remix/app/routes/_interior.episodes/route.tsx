import type { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { EpisodeGrid } from '~/components/EpisodeGrid/EpisodeGrid';
import { FeaturedEpisode } from '~/components/FeaturedEpisode';
import { Newsletter } from '~/components/Newsletter';
import { Podcatchers } from '~/components/Podcatchers';
import { VerticalDivider } from '~/components/VerticalDivider';
import { getClient } from '~/lib/sanity';
import { AllEpisodesQuery } from '~/queries/Queries';

export const loader = async ({ params }: LoaderArgs) => {
  const episodes = await getClient().fetch(AllEpisodesQuery);
  return { episodes };
};

export default function Episodes() {
  const { episodes } = useLoaderData();

  // get the first element in the array to feature
  const featuredEpisode = episodes[0];
  const remainingEpisodes = episodes.slice(1);

  return (
    <div>
      {featuredEpisode && (
        <>
          <FeaturedEpisode episode={featuredEpisode} />
          <VerticalDivider />
        </>
      )}
      <EpisodeGrid header="" episodes={remainingEpisodes} />
      <VerticalDivider />
      <Podcatchers className="podcatchers" />
      <VerticalDivider />
      <Newsletter />
    </div>
  );
}
