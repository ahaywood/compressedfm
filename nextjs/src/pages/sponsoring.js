import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { SponsoringPage } from 'modules/sponsoring';
import client from 'utils/client';
import groq from 'groq';

export default function Sponsoring({ settings }) {
  return (
    <InteriorLayout>
      <SponsoringPage settings={settings} />
    </InteriorLayout>
  );
}

const settingsQuery = groq`*[_type == "siteSettings"] {
  SponsorshipOptions,
  JamesSocialMedia,
  AmySocialMedia
}[0]`;

// This function gets called at build time on server-side.
export async function getStaticProps() {
  const settings = await client.fetch(settingsQuery);
  return {
    props: {
      settings,
    },
  };
}
