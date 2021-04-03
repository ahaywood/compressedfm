import styled from "styled-components";
import { useRouter } from "next/router";
import Head from "next/head";
import client from "utils/client";
import groq from "groq";

// components
import { InteriorLayout } from "modules/shared/layouts/InteriorLayout";
import { SearchPage } from "modules/search"


/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
export default function Search(props) {
  const router = useRouter();
  const content = Object.values(props);

  return (
    <InteriorLayout>
      <Head>
        <title>Search Results for {router.query.keywords} | Compressed.fm</title>
      </Head>
      <SearchPage keywords={router.query.keywords} episodes={content} />
    </InteriorLayout>
  )
}

/** -------------------------------------------------
* QUERY
---------------------------------------------------- */
const query = groq`*[_type == "episode" && published == true && publishedAt < now() && (title match $keywords || briefDescription match $keywords || transcript match $keywords)]  {
  _id,
  title,
  episodeNumber,
  slug,
  publishedAt,
  briefDescription,
  audioPath
}`;

Search.getInitialProps = async function (context) {
  const { keywords = "" } = context.query;
  return await client.fetch(query, { keywords });
}
