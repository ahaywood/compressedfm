import client from 'utils/client';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { SponsoringPage } from 'modules/sponsoring';
import { LegalQuery, settingsQuery } from 'queries/Queries';

export default function Sponsoring({ footerLinks, settings }) {
  return (
    <InteriorLayout footerLinks={footerLinks}>
      <SponsoringPage settings={settings} />
    </InteriorLayout>
  );
}

export async function getServerSideProps() {
  const footerLinks = await client.fetch(LegalQuery);
  const settings = await client.fetch(settingsQuery);
  return {
    props: { footerLinks, settings },
  };
}
