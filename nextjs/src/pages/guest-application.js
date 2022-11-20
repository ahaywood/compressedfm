import client from 'utils/client';
import groq from 'groq';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { GuestApplicationPage } from 'modules/guestApplication';
import { LegalQuery } from 'queries/Queries';
import MyHead from 'modules/shared/components/Header/MyHead';

export default function SponsorApplication({ footerLinks }) {
  return (
    <>
      <MyHead title="Compressed.fm - Be A Guest" />
      <InteriorLayout footerLinks={footerLinks}>
        <GuestApplicationPage />
      </InteriorLayout>
    </>
  );
}

export async function getServerSideProps() {
  const footerLinks = await client.fetch(LegalQuery);
  return {
    props: { footerLinks },
  };
}
