interface Episode {
  _id: string;
  audioPath: string;
  briefDescription: string;
  episodeCover: EpisodeCover;
  episodeNumber: number;
  publishedAt?: null;
  slug: Slug;
  title: string;
}
interface EpisodeCover {
  _type: string;
  asset: Asset;
}
interface Asset {
  _ref: string;
  _type: string;
}
interface Slug {
  _type: string;
  current: string;
}