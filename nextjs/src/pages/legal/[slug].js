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

const query = groq`*[_type == "legal" && slug.current == $slug] {
  _id,
  title,
  content,
  meta
}[0]`;

export async function getServerSideProps(context) {
  const { slug = '' } = context.query;
  const legal = await client.fetch(query, { slug });
  return { props: { legal } };
}
