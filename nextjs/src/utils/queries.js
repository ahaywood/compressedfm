import groq from 'groq';

export const sponsorQuery = groq`*[_type == "sponsor" && associatedEmails match $email] {
  title,
  logo,
  offer,
  offerLink,
  offerLink,
  about,
  founding,
  contractsInvoices[]
}[0]`;

export const guestQuery = groq`*[_type == "guest" && guestEmail == $email] {
  firstName,
  lastName,
  guestEmail,
}[0]`;
