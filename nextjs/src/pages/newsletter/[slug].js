import client from 'utils/client';
import groq from 'groq';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { IndividualNewsletterPage } from 'modules/newsletter/IndividualNewsletterPage';

export default function IndividualNewsletter(props) {
  return (
    <InteriorLayout>
      <IndividualNewsletterPage {...props} />
    </InteriorLayout>
  );
}

const query = groq`*[_type == "newsletter" && slug.current == $slug] | order(dateSent desc) {
  _id,
  subject,
  dateSent,
  slug,
  content[]{
    ...,
    _type == "image" => {
      "imageUrl": @.asset->url
    }
  },
  pagination{
    next->{
      subject,
      dateSent,
      slug
    },
    previous->{
      subject,
      dateSent,
      slug
    }
  },
  meta
}[0]`;

IndividualNewsletter.getInitialProps = async function (context) {
  const { slug = '' } = context.query;
  return await client.fetch(query, { slug });
};
