import client from 'utils/client';
import groq from 'groq';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { IndividualNewsletterPage } from 'modules/newsletter/IndividualNewsletterPage';

<<<<<<< HEAD
=======
// query
import { AllNewslettersQuery } from "./index";

>>>>>>> ffaef74ddf1b374d39e55111e76db78bd7e2b543
export default function IndividualNewsletter({ newsletter }) {
  return (
    <InteriorLayout>
      <IndividualNewsletterPage {...newsletter} />
    </InteriorLayout>
  );
}

const IndividualNewsletterQuery = groq`*[_type == "newsletter" && slug.current == $slug] | order(dateSent desc) {
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
      slug,
      published
    },
    previous->{
      subject,
      dateSent,
      slug,
      published
    }
  },
  meta
}[0]`;

<<<<<<< HEAD
export async function getServerSideProps(context) {
  const { slug = '' } = context.query;
  const newsletter = await client.fetch(query, { slug });
  return { props: { newsletter } };
=======

export async function getStaticPaths() {
  const allNewsletters = await client.fetch(AllNewslettersQuery);

  // Get the paths we want to pre-render based on episodes
  const paths = allNewsletters.map((newsletter) => ({
    params: { slug: newsletter.slug.current },
  }))

  return { paths, fallback: false }
>>>>>>> ffaef74ddf1b374d39e55111e76db78bd7e2b543
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({ params }) {
  const { slug } = params;
  const newsletter = await client.fetch(IndividualNewsletterQuery, { slug });
  return {
    props: {
      newsletter
    },
  }
}