import client from 'utils/client';
import groq from 'groq';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { NewsletterPage } from 'modules/newsletter';

export default function Newsletter({ newsletters }) {
  return (
    <InteriorLayout>
      <NewsletterPage newsletters={newsletters} />
    </InteriorLayout>
  );
}

const query = groq`*[_type == "newsletter" && published == true] | order(dateSent desc) {
  _id,
  subject,
  dateSent,
  slug
}`;

export async function getServerSideProps(context) {
  const newsletters = await client.fetch(query);
  return { props: { newsletters } };
}
