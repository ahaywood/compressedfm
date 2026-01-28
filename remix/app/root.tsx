import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';
import stylesheet from '~/tailwind.css';
import { LiveNow } from './components/LiveNow';
import { getClient } from './lib/sanity';
import { CurrentlyRecordingQuery } from './queries/Queries';
import Fathom from './components/Fathom';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  { rel: 'stylesheet', href: stylesheet },
];

export const loader = async () => {
  const data = await getClient().fetch(CurrentlyRecordingQuery);
  return { data };
};

export default function App() {
  const { data } = useLoaderData();
  const { currentlyRecording, recordingOnYouTube, recordingOnTwitch } = data;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap" rel="stylesheet" />
        <Meta />
        <Links />
        <script src="https://cdn.usefathom.com/script.js" data-site="TRUYKXEJ" defer></script>
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
