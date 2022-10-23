import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import client from 'utils/client';
import { LegalQuery } from 'queries/Queries';
import { GrabBagPage } from 'modules/grabBag';

export default function Contact({ footerLinks }) {
  return (
    <InteriorLayout footerLinks={footerLinks}>
      <GrabBagPage />
    </InteriorLayout>
  );
}

export async function getServerSideProps() {
  const footerLinks = await client.fetch(LegalQuery);
  return {
    props: { footerLinks },
  };
}
