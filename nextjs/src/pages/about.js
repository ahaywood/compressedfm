import { useEffect, useState } from "react";
import client from "utils/client";
import groq from "groq";
import { InteriorLayout } from "modules/shared/layouts/InteriorLayout";
import { AboutPage } from "modules/about";

export default function About() {
  const [faqs, setFaqs] = useState();
  const [gettingStarted, setGettingStarted] = useState();
  const [mostPopular, setMostPopular] = useState();

  // get data
  useEffect(() => {
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
      <AboutPage faqs={faqs} gettingStarted={gettingStarted} mostPopular={mostPopular} />
    </InteriorLayout>
  )
}

