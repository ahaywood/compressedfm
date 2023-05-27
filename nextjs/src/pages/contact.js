import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { ContactPage } from 'modules/contact';
import client from 'utils/client';
import { LegalQuery } from 'queries/Queries';
import MyHead from 'modules/shared/components/Header/MyHead';

export default function Contact({ footerLinks }) {
  return (
    <>
      <MyHead title="Compressed.fm - Contact Us" />
      <InteriorLayout footerLinks={footerLinks}>
        <ContactPage />
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
