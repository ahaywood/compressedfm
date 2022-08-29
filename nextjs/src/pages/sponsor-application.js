import client from 'utils/client';
import groq from 'groq';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { SponsorApplicationPage } from 'modules/sponsorApplication';
import { LegalQuery } from 'queries/Queries';

export default function SponsorApplication({ footerLinks, futureEpisodes, pricing }) {
  return (
    <InteriorLayout footerLinks={footerLinks}>
      <SponsorApplicationPage futureEpisodes={futureEpisodes} pricing={pricing} />
    </InteriorLayout>
  );
}

/** -------------------------------------------------
* QUERIES
---------------------------------------------------- */
// get episodes scheduled for the future
// will need to check to see if these have < 3 sponsors
const futureEpisodesQuery = groq`*[_type == "episode" && published == true && publishedAt > now()] | order(episodeNumber desc) {
  _id,
  title,
  publishedAt,
  sponsor[]->{
    _id,
    title,
  },
}`;

// get the sponsorship pricing
const pricingQuery = groq`*[_type == "siteSettings"] {
  SponsorshipOptions
}[0]`;

export async function getStaticProps() {
  const footerLinks = await client.fetch(LegalQuery);
  const futureEpisodes = await client.fetch(futureEpisodesQuery);
  const pricing = await client.fetch(pricingQuery);
  return {
    props: {
      footerLinks,
      futureEpisodes,
      pricing,
    },
  };
}
