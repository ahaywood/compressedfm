import { getClient } from 'lib/sanity.server';
import groq from 'groq';
import { TagPage } from 'modules/tag';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';

export default function Tag(props) {
  console.log('inside page/tag');
  console.log(props);
  return (
    <InteriorLayout>
      <TagPage content={props} />
    </InteriorLayout>
  );
}

const queryContent = groq`*[_type == "category" && slug.current == $slug ] {
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

const queryCategories = groq`*[_type == "category"] {_id, title, slug}`;

export async function getStaticPaths() {
  const allCategories = await getClient().fetch(queryCategories);

  const paths = allCategories.map((category) => ({
    params: { slug: category.slug.current },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getServerSideProps({ params }) {
  const post = await getClient().fetch(queryContent, { slug: params.slug });
  // pass post data to the page via props
  return { props: { post } };
}
