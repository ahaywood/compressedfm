import { useLoaderData } from '@remix-run/react';
import { getClient } from '~/lib/sanity';
import {
  HostDetailsQuery,
  LegalQuery,
  RecentEpisodesQuery,
  TagsQuery,
} from '~/queries/Queries';
import { HeaderHome } from './HeaderHome';
import { Footer } from '~/components/Footer';
import { Podcatchers } from '~/components/Podcatchers';
import { VerticalDivider } from '~/components/VerticalDivider';
import { FeaturedEpisode } from '~/components/FeaturedEpisode';
import { TheHosts } from './TheHosts';
import { EpisodeGrid } from '~/components/EpisodeGrid/EpisodeGrid';
import { Newsletter } from '~/components/Newsletter';

export const loader = async () => {
  const episodes = await getClient().fetch(RecentEpisodesQuery);
  const footerLinks = await getClient().fetch(LegalQuery);
  const tags = await getClient().fetch(TagsQuery);
  const hostDetails = await getClient().fetch(HostDetailsQuery);
  return { episodes, tags, footerLinks, hostDetails };
};

export default function Index() {
  const { episodes, footerLinks, tags, hostDetails } = useLoaderData();

  // get the first element in the array to feature
  const featured = episodes?.[0];
  const remainingEpisodes = episodes.slice(1);

  return (
    <div className="min-h-screen bg-bg bg-[center_-25px] bg-no-repeat bg-100-auto">
      <HeaderHome tags={tags} />
      <main>
        <Podcatchers className="pb-12" />

        <VerticalDivider />

        {featured && (
          <>
            <FeaturedEpisode episode={featured} />
            <VerticalDivider />
          </>
        )}

        <TheHosts details={hostDetails} />
        <VerticalDivider />

        {episodes && (
          <>
            <EpisodeGrid
              header="Recent Episodes"
              episodes={remainingEpisodes}
            />
            <VerticalDivider />
          </>
        )}

        <Newsletter />
      </main>
      <Footer footerLinks={footerLinks} />
    </div>
  );
}
