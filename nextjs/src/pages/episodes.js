import client from 'utils/client';
import { EpisodePage } from 'modules/episodes';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { AllEpisodesQuery } from 'utils/queries';

export default function Episodes({ episodes }) {
  return (
    <InteriorLayout>
      <EpisodePage episodes={episodes} />
    </InteriorLayout>
  );
}

export async function getStaticProps() {
  const episodes = await client.fetch(AllEpisodesQuery);
  return {
    props: {
      episodes,
    },
  };
}
