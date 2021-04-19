import client from 'utils/client';
import groq from 'groq';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { SponsorsPage } from 'modules/sponsors';

export default function Sponsors(props) {
  const content = Object.values(props);
  return (
    <InteriorLayout>
      <SponsorsPage sponsors={content} />
    </InteriorLayout>
  );
}

const query = groq`*[_type == "sponsor" && published == true && publishedAt < now()] {
  _id,
  title,
  "logo": logo.asset->url,
  offer,
  offerLink,
  about,
  founding,
}`;

Sponsors.getInitialProps = async function () {
  return await client.fetch(query);
};
