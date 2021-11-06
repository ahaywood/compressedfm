import client from 'utils/client';
import groq from 'groq';
import { TagPage } from 'modules/tag';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { LegalQuery } from "../../queries/Queries"

export default function Tag({ content, footerLinks }) {
  return (
    <InteriorLayout footerLinks={footerLinks}>
      <TagPage content={content} />
    </InteriorLayout>
  );
}

const TagsQuery = groq`*[_type == "category" && slug.current == $slug ] {
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
  // footer links
  const footerLinks = await client.fetch(LegalQuery);

  // tags content
  const { slug = '' } = context.query;
  const content = await client.fetch(TagsQuery, { slug });
  return {
    props: {
      content, footerLinks
    }
  };
}
