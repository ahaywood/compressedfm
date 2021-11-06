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