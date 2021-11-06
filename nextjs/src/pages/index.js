import client from 'utils/client';
import groq from 'groq';
import { HomePage } from 'modules/home';
import { HomeLayout } from 'modules/shared/layouts/HomeLayout';
import { LegalQuery } from '../queries/Queries';

export default function Home({ episodes, footerLinks }) {
  return (
    <HomeLayout footerLinks={footerLinks}>
      <HomePage episodes={episodes} />
    </HomeLayout>
  );
}

const query = groq`*[_type == "episode" && published == true && publishedAt < now()] | order(episodeNumber desc) {
  _id,
  title,
  episodeNumber,
  episodeCover,
  slug,
  publishedAt,
  briefDescription,
  audioPath
}[0...4]`;

export async function getServerSideProps() {
  const episodes = await client.fetch(query);
  const footerLinks = await client.fetch(LegalQuery);
  return {
    props: { episodes, footerLinks },
  };
}
