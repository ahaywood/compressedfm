import client from 'utils/client';
import groq from 'groq';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { LegalPage } from 'modules/legal';

export default function Legal({ legal }) {
  return (
    <InteriorLayout>
      <LegalPage content={legal} />
    </InteriorLayout>
  );
}

const AllLegalPagesQuery = groq`*[_type == 'legal' && published == true] {
  slug
}`;

const IndividualLegalQuery = groq`*[_type == "legal" && slug.current == $slug] {
  _id,
  title,
  content,
  meta
}[0]`;

export async function getStaticPaths() {
  const allLegal = await client.fetch(AllLegalPagesQuery);

  // Get the paths we want to pre-render based on episodes
  const paths = allLegal.map((legal) => ({
    params: { slug: legal.slug.current },
  }));

  return { paths, fallback: false };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({ params }) {
  const { slug } = params;
  const legal = await client.fetch(IndividualLegalQuery, { slug });
  return {
    props: {
      legal,
    },
  };
}
