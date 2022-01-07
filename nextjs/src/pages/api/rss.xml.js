// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import client from 'utils/client';
import { AllEpisodesQuery } from 'utils/queries';

const website = 'https://compressed.fm/';

const xml = (episodes) =>
  `<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>Learn Build Teach</title>
    <link>${website}</link>
    <description>Learn Build Teach</description>
    ${episodes
      .map(
        (episode) =>
          `
        <item>
          <title>${episode.title}</title>
          <description>${episode.briefDescription}</description>
          <link>${`${website}/episodes/${episode.slug.current}`}/</link>
          <pubDate>${new Date(episode.publishedAt)}</pubDate>
        </item>
      `
      )
      .join('')
      .replace(/&(?!#?[a-z0-9]+;)/g, '&amp;')}
  </channel>
</rss>`;

export default async function handler(req, res) {
  const episodes = await client.fetch(AllEpisodesQuery);
  const rssString = xml(episodes);
  //   const headers = {
  //     'Cache-Control': 'max-age=0, s-maxage=3600',
  //     'Content-Type': 'application/xml',
  //   }
  res.json(rssString);
}
