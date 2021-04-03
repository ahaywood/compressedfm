import client from "utils/client";
import groq from "groq";
import { InteriorLayout } from "modules/shared/layouts/InteriorLayout";
import { NewsletterPage } from "modules/newsletter";


export default function IndividualNewsletter(props) {
  const content = Object.values(props);
  return (
    <InteriorLayout>
      Individual Newsletter
    </InteriorLayout>
  )
}

const query = groq`*[_type == "newsletter" && slug.current == $slug] | order(dateSent desc) {
  _id,
  subject,
  dateSent,
  slug
}[0]`;

IndividualNewsletter.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
}
