import client from 'utils/client';
import groq from 'groq';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { IndividualEpisodePage } from 'modules/episodes/IndividualEpisodePage';

export default function Episode({ episode }) {
  return (
    <InteriorLayout>
      <IndividualEpisodePage episode={episode} />
    </InteriorLayout>
  );
}

const query = groq`*[_type == "episode" && slug.current == $slug] {
  _id,
  audioPath,
  briefDescription,
  categories[]->,
  episodeCover {
    asset-> {
      url
    }
  },
  episodeNumber,
  guest[]->{
    _id,
    firstName,
    lastName,
    title,
    jobTitle,
    "avatar": avatar.asset->url,
    socialMedia{
      ...
    },
    largeBody,
    bio
  },
  listLink[],
  publishedAt,
  slug,
  sponsor[]->{
    _id,
    title,
    "logo": logo.asset->url,
    offer,
    offerLink,
    about,
    founding,
  },
  timeJump,
  title,
  episodeTranscript,
  relatedEpisodes[]->{
    _id,
    briefDescription,
    title,
    publishedAt,
    episodeNumber,
    slug
  }
}[0]`;

export async function getServerSideProps(context) {
  const { slug = '' } = context.query;
  const episode = await client.fetch(query, { slug });
  return { props: { episode } }
}
