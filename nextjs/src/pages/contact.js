import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { ContactPage } from 'modules/contact';
import client from 'utils/client';
import groq from 'groq';
import { LegalQuery } from 'queries/Queries';

export default function Contact({ footerLinks }) {
  return (
    <InteriorLayout footerLinks={footerLinks}>
      <ContactPage />
    </InteriorLayout>
  );
}

export async function getServerSideProps() {
  const footerLinks = await client.fetch(LegalQuery);
  return {
    props: { footerLinks }
  }
}