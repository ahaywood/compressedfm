import client from 'utils/client';
import groq from 'groq';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { NewsletterPage } from 'modules/newsletter';
import { LegalQuery } from 'queries/Queries';

export default function Newsletter({ footerLinks, newsletters }) {
  return (
    <InteriorLayout footerLinks={footerLinks}>
      <NewsletterPage newsletters={newsletters} />
    </InteriorLayout>
  );
}

export const AllNewslettersQuery = groq`*[_type == "newsletter" && published == true] | order(dateSent desc) {
  _id,
  subject,
  dateSent,
  slug
}`;


export async function getStaticProps({ params }) {
  // footer links
  const footerLinks = await client.fetch(LegalQuery);

  // newsletter content
  const newsletters = await client.fetch(AllNewslettersQuery);
  return { props: { footerLinks, newsletters } };
}
