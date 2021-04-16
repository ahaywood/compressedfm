// Reference: https://scottspence.com/2021/02/02/dynamic-sitemap-generation-with-nextjs-and-sanity/
import groq from 'groq'
import sanityClient from 'utils/client'

export default function SiteMap() {
  return <div>loading</div>
}

export async function getServerSideProps({ res }) {
  const baseUrl = `https://compressed.fm`

  const query = groq`{
      "episodes": *[_type == 'episode' && published == true]{slug, _updatedAt},
      "newsletters": *[_type == 'newsletter' && published == true]{slug, _updatedAt},
      "legals": *[_type == 'legal' && published == true]{slug, _updatedAt},
    }`
  const urls = await sanityClient.fetch(query)

  // create a list of episodes
  const episodes = urls.episodes.map(page => {
    const slug =
      page.slug.current === '/' ? '/' : `/${page.slug.current}`
    return `
      <loc>${baseUrl}${slug}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
      <lastmod>${page._updatedAt}</lastmod>
    `
  });

  // create a list of newsletters
  const newsletters = urls.newsletters.map(page => {
    const slug =
      page.slug.current === '/' ? '/' : `/${page.slug.current}`
    return `
      <loc>${baseUrl}${slug}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
      <lastmod>${page._updatedAt}</lastmod>
    `
  });

  // create a list of legal pages
  const legals = urls.legals.map(page => {
    const slug =
      page.slug.current === '/' ? '/' : `/${page.slug.current}`
    return `
      <loc>${baseUrl}${slug}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.3</priority>
      <lastmod>${page._updatedAt}</lastmod>
    `
  });


  // static urls
  const staticPages = [
    { url: '/', changefreq: 'weekly', priority: 1 },
    { url: '/about', changefreq: 'monthly', priority: 1 },
    { url: '/contact', changefreq: 'monthly', priority: 1 },
    { url: '/guest-application', changefreq: 'monthly', priority: 1 },
    { url: '/guest-instructions', changefreq: 'monthly', priority: 1 },
    { url: '/login', changefreq: 'monthly', priority: 1 },
    { url: '/press-kit', changefreq: 'monthly', priority: 1 },
    { url: '/sponsor-application', changefreq: 'monthly', priority: 1 },
    { url: '/sponsoring', changefreq: 'monthly', priority: 1 },
    { url: '/upcoming', changefreq: 'monthly', priority: 1 },
  ];
  const pages = staticPages.map(page => (
    `
      <loc>${baseUrl}${page.url}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    `
  ))


  const locations = [...episodes, ...newsletters, ...legals, ...pages]
  const createSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${locations.map(location => `<url> ${location} </url>`).join('')}

    </urlset>
    `
  res.setHeader('Content-Type', 'text/xml')
  res.write(createSitemap())
  res.end()
  return {
    props: {},
  }
}