import groq from 'groq';

export const sponsorQuery = groq`*[_type == "sponsor" && associatedEmails match $email && published==true]{
  title,
  "logo": logo.asset->url,
  offer,
  offerLink,
  offerLink,
  about,
  founding,
  contractsInvoices[],
  "episodes": *[_type=='episode' && references(^._id)]{
    title,
    audioPath,
    simplecastId
  }
}[0]`;

export const guestQuery = groq`*[_type == "guest" && guestEmail == $email && published==true] {
  firstName,
  lastName,
  guestEmail,
  "episodes": *[_type=='episode' && references(^._id)]{
    title,
    audioPath,
    simplecastId
  }
}[0]`;

export const getEpisodeByIdQuery = groq`*[_type == "episode" && _id in $ids] {
  title, audioPath, episodeNumber, _id, waveform
}`;

