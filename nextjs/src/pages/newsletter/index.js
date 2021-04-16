import client from 'utils/client';
import groq from 'groq';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { NewsletterPage } from 'modules/newsletter';

export default function Newsletter(props) {
  const content = Object.values(props);
  return (
    <InteriorLayout>
      <NewsletterPage newsletters={content} />
    </InteriorLayout>
  );
}

const query = groq`*[_type == "newsletter" && published == true] | order(dateSent desc) {
  _id,
  subject,
  dateSent,
  slug
}`;

Newsletter.getInitialProps = async function (context) {
  return await client.fetch(query);
};
