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

const query = groq`*[_type == "episode" && published == true && publishedAt < now()] | order(episodeNumber desc) {
  _id,
  title,
  "cover": episodeCover.asset->url,
  episodeNumber,
  slug,
  publishedAt,
  briefDescription,
  audioPath
}`;

const tagQuery = groq`*[_type == "category"] {_id, title, slug}`;

export async function getStaticProps() {
  const episodes = await client.fetch(query);
  const tags = await client.fetch(tagQuery);
  return {
    props: { episodes, tags },
  };
}
