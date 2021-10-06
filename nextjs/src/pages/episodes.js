import client from 'utils/client';
import groq from 'groq';
import { EpisodePage } from 'modules/episodes';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';

export default function Episodes({ episodes }) {
  return (
    <InteriorLayout>
      <EpisodePage episodes={episodes} />
    </InteriorLayout>
  );
}

export const AllEpisodesQuery = groq`*[_type == "episode" && published == true && publishedAt < now()] | order(episodeNumber desc) {
  _id,
  title,
  "cover": episodeCover.asset->url,
  episodeNumber,
  slug,
  publishedAt,
  briefDescription,
  audioPath
}`;

export async function getServerSideProps() {
<<<<<<< HEAD
  const episodes = await client.fetch(query);
=======
  const episodes = await client.fetch(AllEpisodesQuery);
>>>>>>> ffaef74ddf1b374d39e55111e76db78bd7e2b543
  return {
    props: { episodes },
  };
}
