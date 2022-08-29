import { useRouter } from 'next/router';
import Head from 'next/head';
import client from 'utils/client';
import groq from 'groq';

// components
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { SearchPage } from 'modules/search';
import { LegalQuery } from '../queries/Queries';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
export default function Search({ episodes, footerLinks }) {
  const router = useRouter();

  return (
    <InteriorLayout footerLinks={footerLinks}>
      <Head>
        <title>Search Results for {router.query.keywords} | Compressed.fm</title>
      </Head>
      <SearchPage keywords={router.query.keywords} episodes={episodes} />
    </InteriorLayout>
  );
}

/** -------------------------------------------------
* QUERY
---------------------------------------------------- */
const query = groq`*[_type == "episode" && published == true && publishedAt < now() && ([title, briefDescription, transcript] match [$keywords])]  {
  _id,
  title,
  episodeNumber,
  slug,
  publishedAt,
  briefDescription,
  audioPath
}`;

export async function getServerSideProps(context) {
  const { keywords = '' } = context.query;
  const footerLinks = await client.fetch(LegalQuery);
  const episodes = await client.fetch(query, { keywords });
  return {
    props: { episodes, footerLinks },
  };
}
