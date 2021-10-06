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
  return {
<<<<<<< HEAD
    props: { episodes },
  };
=======
    props: { episodes }
  }
>>>>>>> ffaef74ddf1b374d39e55111e76db78bd7e2b543
}
