import client from 'utils/client';
import groq from 'groq';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { IndividualNewsletterPage } from 'modules/newsletter/IndividualNewsletterPage';

export default function IndividualNewsletter({ newsletter }) {
  return (
    <InteriorLayout>
      <IndividualNewsletterPage {...newsletter} />
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
    },
    _type == "thumbnailWithContent" => {
      "thumbUrl": @.thumbnail.asset->{url}
    },
    _type == 'referenceSponsor' => {
      "sponsor": @.sponsor->{
        title,
        about,
        "logo": logo.asset->{url},
        offer,
        offerLink
      }
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

export async function getServerSideProps(context) {
  const { slug = '' } = context.query;
  const newsletter = await client.fetch(query, { slug });
  return { props: { newsletter } };
}
