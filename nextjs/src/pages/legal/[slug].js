import client from "utils/client";
import groq from "groq";
import { InteriorLayout } from "modules/shared/layouts/InteriorLayout";
import { LegalPage } from "modules/legal"

export default function Legal(props) {
  return (
    <InteriorLayout>
      <LegalPage content={props} />
    </InteriorLayout>
  )
}

const query = groq`*[_type == "legal" && slug.current == $slug] {
  _id,
  title,
  content,
  meta
}[0]`;

Legal.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
}
