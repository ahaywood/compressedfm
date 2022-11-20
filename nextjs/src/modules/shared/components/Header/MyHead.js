/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';

function MyHead({ title, description, image }) {
  const defaultTitle = 'Compressed.fm';
  const defaultDescription = 'A weekly podcast about Web Development and Web Design with a little big of zest!';
  const defaultImage = '/images/podcast-cover.jpg';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <Head>
      <title>Compressed.fm</title>
      <script src="https://cdn.usefathom.com/script.js" data-site="TRUYKXEJ" defer />
      <meta name="title" content={title || defaultTitle} key="title" />
      <meta name="description" content={description || defaultDescription} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || baseUrl + defaultImage} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={baseUrl} />
      <meta property="twitter:title" content={title || defaultTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={image || baseUrl + defaultImage} />
    </Head>
  );
}

export default MyHead;
