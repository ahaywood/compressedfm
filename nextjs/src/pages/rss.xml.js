import client from 'utils/client';
import { AllEpisodesQuery } from 'queries/Queries';

const website = 'https://compressed.fm';

const xml = (episodes) =>
  `<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>Compressed.fm</title>
    <link>${website}</link>
    <description>Compressed.fm Podcast</description>
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

export default function RSS() {
  return <div>RSS</div>;
}

export async function getServerSideProps({ res }) {
  const episodes = await client.fetch(AllEpisodesQuery);
  const rssString = xml(episodes);
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=3600');
  res.setHeader('Content-Type', 'text/xml');
  res.write(rssString);
  res.end();
  return {
    props: {},
  };
}
