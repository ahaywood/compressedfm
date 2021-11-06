import client from 'utils/client';
import groq from 'groq';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { SponsorsPage } from 'modules/sponsors';
import { LegalQuery } from 'queries/Queries';

export default function Sponsors({ footerLinks, sponsors }) {

  return (
    <InteriorLayout footerLinks={footerLinks}>
      <SponsorsPage sponsors={sponsors} />
    </InteriorLayout>
  );
}

const query = groq`*[_type == "sponsor" && published == true && publishedAt < now()] {
  _id,
  title,
  "logo": logo.asset->url,
  offer,
  offerLink,
  about,
  founding,
}`;




export async function getServerSideProps() {
  const sponsors = await client.fetch(query);
  const footerLinks = await client.fetch(LegalQuery);
  return {
    props: { footerLinks, sponsors }
  }
}


