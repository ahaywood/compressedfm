import { redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import groq from 'groq';
import { getClient } from '~/lib/sanity';

export const loader = async () => {
  const query = groq`*[_type == "siteSettings" && published == true] {
    _id,
    streamYardRecordingLink
  }`;
  const streamYardLink = await getClient().fetch(query);
  return { streamYardLink };
};

export default function Studio() {
  const { streamYardLink } = useLoaderData();
  console.log({ streamYardLink });
  return <div>YOLO</div>;
  // return redirect(streamYardLink[0].streamYardRecordingLink);
}
