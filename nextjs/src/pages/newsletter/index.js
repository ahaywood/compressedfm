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

export const AllNewslettersQuery = groq`*[_type == "newsletter" && published == true] | order(dateSent desc) {
  _id,
  subject,
  dateSent,
  slug
}`;

<<<<<<< HEAD
export async function getServerSideProps() {
  const newsletters = await client.fetch(query);
=======
export async function getServerSideProps(context) {
  const newsletters = await client.fetch(AllNewslettersQuery);
>>>>>>> ffaef74ddf1b374d39e55111e76db78bd7e2b543
  return { props: { newsletters } };
}
