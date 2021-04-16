import client from 'utils/client';
import groq from 'groq';
import { HomePage } from 'modules/home';
import { HomeLayout } from 'modules/shared/layouts/HomeLayout';

export default function Home(props) {
  const content = Object.values(props);
  return (
    <HomeLayout>
      <HomePage episodes={content} />
    </HomeLayout>
  );
}

const query = groq`*[_type == "episode" && published == true] | order(episodeNumber desc) {
  _id,
  title,
  episodeNumber,
  episodeCover,
  slug,
  publishedAt,
  briefDescription,
  audioPath
}[0...4]`;

Home.getInitialProps = async function () {
  return await client.fetch(query);
};
