import client from 'utils/client';
import groq from 'groq';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { SponsoringPage } from 'modules/sponsoring';
import { LegalQuery } from 'queries/Queries';

export default function Sponsoring({ footerLinks }) {
  return (
    <InteriorLayout footerLinks={footerLinks}>
      <SponsoringPage />
    </InteriorLayout>
  );
}

export async function getServerSideProps() {
  const footerLinks = await client.fetch(LegalQuery);
  return {
    props: { footerLinks },
  };
}
