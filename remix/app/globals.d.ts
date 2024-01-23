interface Episode {
  _id: string;
  audioPath: string;
  guest: Guest[];
  hosts: Guest[];
  publishedAt: string;
  episodeNumber: string;
  slug: {
    current: string;
  };
  title: string;
  briefDescription: string;
  cover: string;
}

interface Faq {
  _id: string;
  question: string;
  answer: [];
}

interface Guest {
  _id: string;
  avatar: string;
  bio: string;
  firstName: string;
  jobTitle: string;
  lastName: string;
  socialMedia: SocialMedia;
  largeBody: string;
  title: string;
}

interface Link {
  _id: string;
  slug: {
    current: string;
  };
  title: string;
}

interface ListLink {
  _key: string;
  linkLabel: string;
  linkUrl: string;
  newTab: 'blank' | 'self';
}

interface Sponsor {
  _id: string;
  logo: string;
  title: string;
  offerLink: string;
  offer: string;
  aboutText: [];
  founding: boolean;
}

interface SocialMedia {
  devTo?: string;
  discord?: string;
  dribbble?: string;
  facebook?: string;
  github?: string;
  hashnode?: string;
  instagram?: string;
  linkedin?: string;
  medium?: string;
  pinterest?: string;
  rss?: string;
  tiktok?: string;
  twitch?: string;
  twitter?: string;
  website?: string;
  youtube?: string;
}

interface Tag {
  _id: string;
  title: string;
}

interface TimeJump {
  _key: string;
  time: string;
  description: string;
}

interface Swag {
  _id: string;
  title: string;
  description: string;
  image: string;
  slug: {
    current: string;
  };
  price: number;
  category: 'hoodies' | 'tshirts';
}
