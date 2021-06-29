import { useEffect, useState } from 'react';
import Head from 'next/head';
import client from 'utils/client';
import groq from 'groq';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { AboutPage } from 'modules/about';
import { Meta } from 'modules/shared/components/Meta';

export default function About() {
  const [faqs, setFaqs] = useState();
  const [gettingStarted, setGettingStarted] = useState();
  const [mostPopular, setMostPopular] = useState();
  const [siteSettings, setSiteSettings] = useState();

  // get data
  useEffect(() => {
    // get siteSettings
    const siteSettings = groq`*[_type == "siteSettings"]{
     _id,
     reasonsBehind
   }[1]`;

    client.fetch(siteSettings).then((res) => setSiteSettings(res));

    // get FAQs
    const faqQuery = groq`*[_type == "faq" && published == true]{
      _id,
      question,
      answer
    }`;
    client.fetch(faqQuery).then((res) => setFaqs(res));

    // get Getting Started Episodes
    const gettingStartedQuery = groq`*[_type == "episode" && published == true && gettingStarted == true] | order(episodeNumber desc){
      _id,
      title,
      episodeNumber,
      slug,
      publishedAt,
      briefDescription
    }[0...3]`;
    client.fetch(gettingStartedQuery).then((res) => setGettingStarted(res));

    // get Popular Episodes
    const popularEpisodesQuery = groq`*[_type == "episode" && published == true && popularEpisode == true] | order(episodeNumber desc) {
      _id,
      title,
      episodeNumber,
      slug,
      publishedAt,
      briefDescription
    }[0...3]`;
    client.fetch(popularEpisodesQuery).then((res) => setMostPopular(res));
  }, []);

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
