import client from "utils/client";
import groq from "groq";
import { InteriorLayout } from "modules/shared/layouts/InteriorLayout";
import { IndividualEpisodePage } from "modules/episodes/IndividualEpisodePage"

export default function Episode(props) {
  return (
    <InteriorLayout>
      <IndividualEpisodePage episode={props} />
    </InteriorLayout>
  )
}

const query = groq`*[_type == "episode" && slug.current == $slug] {
  _id,
  title,
  episodeNumber,
  slug,
  publishedAt,
  briefDescription,
  audioPath
}[0]`;

Episode.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
}
