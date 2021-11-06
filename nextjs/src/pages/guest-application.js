import client from 'utils/client';
import groq from 'groq';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { GuestApplicationPage } from 'modules/guestApplication';
import { LegalQuery } from 'queries/Queries';

export default function SponsorApplication({ footerLinks }) {
  return (
    <InteriorLayout footerLinks={footerLinks}>
      <GuestApplicationPage />
    </InteriorLayout>
  );
}

export async function getServerSideProps() {
  const footerLinks = await client.fetch(LegalQuery);
  return {
    props: { footerLinks }
  }
}
