import client from 'utils/client';
import groq from 'groq';
import { HomePage } from 'modules/home';
import { HomeLayout } from 'modules/shared/layouts/HomeLayout';

export interface Episode {
  _id: string;
  audioPath: string;
  briefDescription: string;
  episodeCover: EpisodeCover;
  episodeNumber: number;
  publishedAt?: null;
  slug: Slug;
  title: string;
}
export interface EpisodeCover {
  _type: string;
  asset: Asset;
}
export interface Asset {
  _ref: string;
  _type: string;
}
export interface Slug {
  _type: string;
  current: string;
}

interface Props {
  episodes: Episode[]
}


export default function Home({ episodes }: Props) {
  return (
    <HomeLayout>
      <HomePage episodes={episodes} />
    </HomeLayout>
  );
}

const query = groq`*[_type == "episode" && published == true] | order(episodeNumber desc) {
  _id,
  title,
  episodeNumber,
  episodeCover,
  slug,
  publishedAt,
  briefDescription,
  audioPath
}[0...4]`;

export async function getServerSideProps() {
  const episodes = await client.fetch(query);
  return {
    props: { episodes }
  }
}
