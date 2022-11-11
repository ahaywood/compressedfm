import { Image, Slug, Block, Reference } from '@sanity/types';
export interface Episode {
  _id: string;
  episodeNumber: number;
  title: string;
  slug: Slug;
  publishedAt: string;
  published: boolean;
  meta: Meta;
  guest: Guest[];
  hosts: Guest[];
  sponsor: Sponsor;
  sponsorWithTimecode: SponsorTimecode[];
  episodeCover: Image;
  socialCover: Image;
  waveform: Image;
  briefDescription: string;
  audioPath: string;
  simplecastId: string;
  categories: Category[];
  listLink: any[];
  timeJump: any[];
  relatedEpisodes: Episode[];
  gettingStarted: boolean;
  popularEpisode: boolean;
  episodeStats: any;
  episodeTranscript: any;
  transcriptDownload: any;
  leadMagnet: any;
  waveformUrl: string;
  episodeCoverUrl: string;
  socialCoverUrl: string;
  automationFailed: boolean;
}

export interface Category {
  _id: string;
  title: string;
  slug: Slug;
  description: string;
}

export interface Sponsor {
  _id: string;
  title: string;
  slug: Slug;
  logo: Image;
  published: boolean;
  publishedAt: Date;
  offer: string;
  offerLink: string;
  aboutText: Block;
  founding: boolean;
  associatedEmails: string;
  contractsInvoices: any[];
}

export interface Guest {
  _id: string;
  _ref: string;
  title: string;
  firstName: string;
  lastName: string;
  guestEmail: string;
  jobTitle: string;
  avatar: string;
  socialMedia: SocialMedia;
  largeBody: string;
  bio: Block[];
  company: string;
  companyLogo: Image;
  specialProjects: string;
}

export interface Meta {
  seoTitle: string;
  seoDescription: Text;
  ogTitle: string;
  ogDescription: Text;
  ogImage: Image;
  twitterTitle: string;
  twitterDescription: Text;
  twitterImage: Image;
  twitterImageAlt: string;
  twitterCardType: string;
  ogAudio: string;
}

export interface SponsorTimecode {
  sponsor: Reference;
  adStart: string;
  adEnd: string;
}

export interface SocialMedia {
  twitter: string;
  instagram: string;
  facebook: string;
  github: string;
  twitch: string;
  youtube: string;
  website: string;
  tiktok: string;
  devto: string;
  medium: string;
  hashnode: string;
  discord: string;
  linkedin: string;
  pinterest: string;
  dribbble: string;
}
