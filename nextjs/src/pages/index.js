import client from 'utils/client';
import { HomePage } from 'modules/home';
import { HomeLayout } from 'modules/shared/layouts/HomeLayout';
import { LegalQuery, RecentEpisodesQuery } from 'queries/Queries';
import MyHead from 'modules/shared/components/Header/MyHead';

export default function Home({ episodes, footerLinks }) {
  return (
    <>
      <MyHead />
      <HomeLayout footerLinks={footerLinks}>
        <HomePage episodes={episodes} />
      </HomeLayout>
    </>
  );
}

export async function getServerSideProps() {
  const episodes = await client.fetch(RecentEpisodesQuery);

  const footerLinks = await client.fetch(LegalQuery);
  return {
    props: { episodes, footerLinks },
  };
}
