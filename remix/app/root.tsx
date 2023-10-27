import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction, V2_MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';
import stylesheet from '~/tailwind.css';
import { LiveNow } from './components/LiveNow';
import { getClient } from './lib/sanity';
import { CurrentlyRecordingQuery } from './queries/Queries';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  { rel: 'stylesheet', href: stylesheet },
];

export const loader = async () => {
  const data = await getClient().fetch(CurrentlyRecordingQuery);
  return { data };
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Compressed.fm' },
    {
      name: 'description',
      content:
        'A weekly podcast, hosted by Amy Dutton and James Q Quick, all about web design and development with a little bit of zest.',
    },
    {
      name: 'og:image',
      content: '/images/podcast-cover.jpg',
    },
    {
      name: 'og:image:alt',
      content: 'Compressed.fm Podcast Cover',
    },
  ];
};

export default function App() {
  const { data } = useLoaderData();
  const { currentlyRecording, recordingOnYouTube, recordingOnTwitch } = data;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {currentlyRecording ? <LiveNow youtube={recordingOnYouTube} twitch={recordingOnTwitch} /> : null}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
