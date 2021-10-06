import groq from 'groq';

export const sponsorQuery = groq`*[_type == "sponsor" && associatedEmails match $email && published==true]{
  title,
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
    simplecastId
  }
}[0]`;

export const sponsorBySlugQuery = groq`*[_type == "sponsor" && slug.current == $slug && published==true]{
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
  "episodes": *[_type=='episode' && references(^._id)]{
    title,
    audioPath,
    simplecastId
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
