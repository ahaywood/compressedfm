import Head from 'next/head';
import client from 'utils/client';
import groq from 'groq';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { AboutPage } from 'modules/about';
import { Meta } from 'modules/shared/components/Meta';

export default function About({
  siteSettings,
  gettingStarted,
  mostPopular,
  faqs
}) {

  return (
    <InteriorLayout>
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
    </InteriorLayout>
  );
}

// get siteSettings
const siteSettingsQuery = groq`*[_type == "siteSettings"]{
     _id,
     reasonsBehind
   }[0]`;

// get FAQs
const faqQuery = groq`*[_type == "faq" && published == true]{
      _id,
      question,
      answer
    }`;

// get Getting Started Episodes
const gettingStartedQuery = groq`*[_type == "episode" && published == true && gettingStarted == true] | order(episodeNumber desc){
      _id,
      title,
      episodeNumber,
      slug,
      publishedAt,
      briefDescription
    }[0...3]`;

// get Popular Episodes
const popularEpisodesQuery = groq`*[_type == "episode" && published == true && popularEpisode == true] | order(episodeNumber desc) {
      _id,
      title,
      episodeNumber,
      slug,
      publishedAt,
      briefDescription
    }[0...3]`;


export async function getStaticProps(context) {
  // set settings
  const siteSettings = await client.fetch(siteSettingsQuery);

  // getting started episodes
  const gettingStarted = await client.fetch(gettingStartedQuery);

  // most popular episodes
  const mostPopular = await client.fetch(popularEpisodesQuery);

  // faqs
  const faqs = await client.fetch(faqQuery);

  return {
    props: {
      siteSettings,
      gettingStarted,
      mostPopular,
      faqs
    }, // will be passed to the page component as props
  }
}