import client from 'utils/client';
import groq from 'groq';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { IndividualEpisodePage } from 'modules/episodes/IndividualEpisodePage';
import { Episode as EpisodeType } from 'pages';

export interface IndividualEpisode extends EpisodeType {
  categories?: null;
  episodeTranscript?: null;
  guest?: any[];
  listLink?: (ListLinkEntity)[] | null;
  relatedEpisodes?: (RelatedEpisodesEntity)[] | null;
  sponsor?: (SponsorEntity)[] | null;
  timeJump?: (TimeJumpEntity)[] | null;
}
export interface EpisodeCover {
  _type: string;
  asset: Asset;
}
export interface Asset {
  _ref: string;
  _type: string;
}
export interface ListLinkEntity {
  _key: string;
  _type: string;
  linkLabel: string;
  linkUrl: string;
  newTab: boolean;
}
export interface RelatedEpisodesEntity {
  _id: string;
  briefDescription: string;
  episodeNumber: number;
  publishedAt: string;
  slug: Slug;
  title: string;
}
export interface Slug {
  _type: string;
  current: string;
}
export interface SponsorEntity {
  _id: string;
  about: string;
  founding: boolean;
  logo: string;
  offer: string;
  offerLink: string;
  title: string;
}
export interface TimeJumpEntity {
  _key: string;
  _type: string;
  description: string;
  time: string;
}

interface EpisodeProps {
  episode: IndividualEpisode
}


export default function Episode({ episode }: EpisodeProps) {
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
  episodeCover,
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
