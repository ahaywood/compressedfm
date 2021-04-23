import client from 'utils/client';
import groq from 'groq';
import { TagPage } from 'modules/tag';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';

export default function Tag({tags}) {
  return <InteriorLayout>{/* <TagPage episodes={content} /> */}</InteriorLayout>;
}

const query = groq`*[_type == "category"] {
  _id,
  title,
  description,
  "episodes": *[_type=='' && references(^._id)] {
    title,
    categories[]->,
    episodeNumber,
    slug,
    publishedAt,
    briefDescription,
    audioPath
  }
}`;

export async function getServerSideProps(context) {
  const { slug = '' } = context.query;
  const tags = await client.fetch(query, { slug });
  return {props: {tags}};
};
