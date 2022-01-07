import groq from 'groq';

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

export const sponsorBySlugQuery = groq`*[_type == "sponsor" && slug.current == $slug && published]{
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

export const guestQuery = groq`*[_type == "guest" && guestEmail match $email && published==true] {
  firstName,
  lastName,
  guestEmail,
  "episodes": *[_type=='episode' && references(^._id)]{
    title,
    audioPath,
    simplecastId
  }
}[0]`;

export const AllEpisodesQuery = groq`*[_type == "episode" && published == true && publishedAt < now()] | order(episodeNumber desc) {
  _id,
  title,
  "cover": episodeCover.asset->url,
  episodeNumber,
  slug,
  publishedAt,
  briefDescription,
  audioPath
}`;
