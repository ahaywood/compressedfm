import client from 'utils/client';
import groq from 'groq';
import { HomePage } from 'modules/home';
import { HomeLayout } from 'modules/shared/layouts/HomeLayout';

export default function Home({ episodes }) {
  return (
    <HomeLayout>
      <HomePage episodes={episodes} />
    </HomeLayout>
  );
}

const FeaturedEpisode = groq`*[_type == "episode" && published == true && publishedAt < now()] | order(episodeNumber desc) {
  _id,
  title,
  episodeNumber,
  episodeCover,
  slug,
  publishedAt,
  briefDescription,
  audioPath,
  guest[]->{
    firstName,
    lastName,
    "avatar": avatar.asset->url,
  },
}[0...4]`;

export async function getServerSideProps() {
  const episodes = await client.fetch(FeaturedEpisode);
  return {
    props: { episodes },
  };
}
