import client from 'utils/client';
import groq from 'groq';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { NewsletterPage } from 'modules/newsletter';
import { AllNewslettersQuery, LegalQuery } from 'queries/Queries';

export default function Newsletter({ footerLinks, newsletters }) {
  return (
    <InteriorLayout footerLinks={footerLinks}>
      <NewsletterPage newsletters={newsletters} />
    </InteriorLayout>
  );
}

export async function getStaticProps() {
  // footer links
  const footerLinks = await client.fetch(LegalQuery);

  // newsletter content
  const newsletters = await client.fetch(AllNewslettersQuery);
  return { props: { footerLinks, newsletters } };
}
