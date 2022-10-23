import Head from 'next/head';
import client from 'utils/client';
import groq from 'groq';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { AboutPage } from 'modules/about';
import { Meta } from 'modules/shared/components/Meta';
import { LegalQuery, FaqQuery, GettingStartedEpisodesQuery, PopularEpisodesQuery } from '../queries/Queries';

export default function About({ siteSettings, gettingStarted, mostPopular, faqs, footerLinks }) {
  console.log(faqs);
  return (
    <InteriorLayout footerLinks={footerLinks}>
      <>
        <Head>
          <Meta
            seoTitle="About Compressed.fm"
            seoDescription=""
            ogTitle="About Compressed.fm"
            ogDescription=""
            ogImage=""
            twitterTitle=""
            twitterDescription=""
            twitterImage=""
            twitterImageAlt=""
            url="https://compressed.fm/about"
          />
        </Head>
        <AboutPage siteSettings={siteSettings} faqs={faqs} gettingStarted={gettingStarted} mostPopular={mostPopular} />
      </>
    </InteriorLayout>
  );
}

// get siteSettings
const siteSettingsQuery = groq`*[_type == "siteSettings"]{
  _id,
  reasonsBehind
}[0]`;

export async function getStaticProps() {
  // set settings
  const siteSettings = await client.fetch(siteSettingsQuery);

  // footer links
  const footerLinks = await client.fetch(LegalQuery);

  // get FAQs
  const faqs = await client.fetch(FaqQuery);

  // get Getting Started Episodes
  const gettingStarted = await client.fetch(GettingStartedEpisodesQuery);

  // get Popular Episodes
  const mostPopular = await client.fetch(PopularEpisodesQuery);

  return {
    props: {
      faqs,
      footerLinks,
      gettingStarted,
      mostPopular,
      siteSettings,
    },
  };
}
