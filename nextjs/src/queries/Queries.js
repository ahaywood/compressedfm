import groq from 'groq';

export const LegalQuery = groq`*[_type == "legal" && published == true] {
  _id,
  title,
  slug
}`;

export const FaqQuery = groq`*[_type == "faq" && published == true]{
  _id,
  question,
  answer
}`;

export const GettingStartedEpisodesQuery = groq`*[_type == "episode" && published == true && gettingStarted == true] | order(episodeNumber desc){
  _id,
  title,
  episodeNumber,
  slug,
  publishedAt,
  briefDescription
}[0...3]`;

export const PopularEpisodesQuery = groq`*[_type == "episode" && published == true && popularEpisode == true] | order(episodeNumber desc) {
  _id,
  title,
  episodeNumber,
  slug,
  publishedAt,
  briefDescription
}[0...3]`;

export const AllEpisodesQuery = groq`*[_type == "episode" && published == true && publishedAt < now()] | order(episodeNumber desc) {
    _id,
    title,
    "cover": episodeCover.asset->url,
    guest[]->{
      firstName,
      lastName,
      "avatar": avatar.asset->url,
    },
    episodeNumber,
    slug,
    publishedAt,
    briefDescription,
    audioPath
  }`;

export const RecentEpisodesQuery = groq`*[_type == "episode" && published == true && publishedAt < now()] | order(episodeNumber desc) {
    _id,
    title,
    "cover": episodeCover.asset->url,
    guest[]->{
      firstName,
      lastName,
      "avatar": avatar.asset->url,
    },
    episodeNumber,
    slug,
    publishedAt,
    briefDescription,
    audioPath
  }[0...4]`;

export const sponsorQuery = groq`*[_type == "sponsor" && associatedEmails match $email && published==true]{
  title,
  slug,
  "logo": logo.asset->url,
  offer,
  offerLink,
  offerLink,
  about,
  founding,
  contractsInvoices[]{
    ...,
    "contractPDF": contractPDF.asset->url,
    "invoicePDF": invoicePDF.asset->url
  },
  "episodes": *[_type=='episode' && references(^._id)]{
    title,
    audioPath,
    episodeStats,
    simplecastId
  }
}[0]`;

export const AllNewslettersQuery = groq`*[_type == "newsletter" && published == true] | order(dateSent desc) {
  _id,
  subject,
  dateSent,
  slug
}`;

export const SponsorBySlugQuery = groq`*[_type == "sponsor" && slug.current == $slug && published]{
  _id,
  title,
  "logo": logo.asset->url,
  offer,
  offerLink,
  offerLink,
  about,
  founding,
  associatedEmails,
  contractsInvoices[]{
    ...,
    "contractPDF": contractPDF.asset->url,
    "invoicePDF": invoicePDF.asset->url
  },
  "episodes": *[_type=='episode' && references(^._id) && published == true && publishedAt < now()] | order(episodeNumber desc) {
    __id,
    title,
    publishedAt,
    slug,
    sponsorWithTimecode[] {
      adStart,
      adEnd,
      sponsor->{
        _id,
        title
      }
    },
    episodeNumber,
    audioPath,
    episodeStats,
    simplecastId,
  }
}[0]`;

export const GuestQuery = groq`*[_type == "guest" && guestEmail match $email && published==true] {
  firstName,
  lastName,
  guestEmail,
  "episodes": *[_type=='episode' && references(^._id)]{
    title,
    audioPath,
    simplecastId
  }
}[0]`;

export const pricingQuery = groq`*[_type == "siteSettings"] {
    SponsorshipOptions
  }[0]`;

export const settingsQuery = groq`*[_type == "siteSettings"] {
    SponsorshipOptions,
    JamesSocialMedia,
    AmySocialMedia
  }[0]`;
