import client from 'utils/client';
import groq from 'groq';

// components
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { IndividualEpisodePage } from 'modules/episodes/IndividualEpisodePage';

// queries
import { AllEpisodesQuery, LegalQuery } from 'queries/Queries';
import MyHead from 'modules/shared/components/Header/MyHead';

export default function Episode({ episode, footerLinks }) {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const coverImage = episode?.episodeCover?.asset?.url || `${baseURL}/images/podcast-cover.jpg`;
  const title = `Episode ${episode.episodeNumber} - ${episode.title}`;
  return (
    <>
      <MyHead title={title} image={coverImage} description={episode.description} />
      <InteriorLayout footerLinks={footerLinks}>
        <IndividualEpisodePage episode={episode} />
      </InteriorLayout>
    </>
  );
}

const IndividualEpisodeQuery = groq`*[_type == "episode" && slug.current == $slug] {
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
    aboutText,
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

export async function getStaticPaths() {
  const allEpisodes = await client.fetch(AllEpisodesQuery);

  // Get the paths we want to pre-render based on episodes
  const paths = allEpisodes.map((episode) => ({
    params: { slug: episode.slug.current },
  }));

  return { paths, fallback: 'blocking' };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({ params }) {
  // footer links
  const footerLinks = await client.fetch(LegalQuery);

  // page content
  const { slug } = params;
  const episode = await client.fetch(IndividualEpisodeQuery, { slug });
  return {
    props: {
      episode,
      footerLinks,
    },
  };
}
