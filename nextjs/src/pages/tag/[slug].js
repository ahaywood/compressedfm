import client from 'utils/client';
import groq from 'groq';
import { TagPage } from 'modules/tag';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';

export default function Tag(props) {
  return (
    <InteriorLayout>
      <TagPage content={props} />
    </InteriorLayout>
  );
}

const query = groq`*[_type == "category" && slug.current == $slug ] {
  _id,
  title,
  description,
  "episodes": *[_type=='episode' && references(^._id)] {
    title,
    categories[]->,
    episodeNumber,
    slug,
    publishedAt,
    briefDescription,
    audioPath
  }
}[0]`;

export async function getServerSideProps(context) {
  const { slug = '' } = context.query;
  const content = await client.fetch(query, { slug });
  return { props: { content } };
}
