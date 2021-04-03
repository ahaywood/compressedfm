import client from "utils/client";
import groq from "groq";
import { TagPage } from "modules/tag";
import { InteriorLayout } from "modules/shared/layouts/InteriorLayout";

export default function Tag(props) {
  const content = Object.values(props);
  return (
    <InteriorLayout>
      <TagPage episodes={content} />
    </InteriorLayout>
  )
}

const query = groq`*[_type == "episode"] | order(episodeNumber desc) {
  _id,
  title,
  episodeNumber,
  slug,
  publishedAt,
  briefDescription,
  audioPath
}[0...8]`;

Tag.getInitialProps = async function (context) {
  return await client.fetch(query);
}
