import client from 'utils/client';
import { EpisodePage } from 'modules/episodes';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { LegalQuery, AllEpisodesQuery } from 'queries/Queries';

export default function Episodes({ episodes, footerLinks }) {
  return (
    <InteriorLayout footerLinks={footerLinks}>
      <EpisodePage episodes={episodes} />
    </InteriorLayout>
  );
}

export async function getStaticProps() {
  const footerLinks = await client.fetch(LegalQuery);
  const episodes = await client.fetch(AllEpisodesQuery);
  return {
    props: {
      episodes,
      footerLinks,
    },
  };
}
