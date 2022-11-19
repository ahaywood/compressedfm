/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
import Router from 'next/router';
import Head from 'next/head';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { UserProvider } from '@auth0/nextjs-auth0';
import NProgress from 'nprogress';
import Theme from '../styles/Theme';
import 'styles/nprogress.css';

// Bind nProgress Bar
Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const { footerLinks, user } = pageProps;
  const title = 'Compressed.fm';
  const description = 'A weekly podcast about Web Development and Web Design with a little big of zest!';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <UserProvider>
      <ThemeProvider theme={Theme}>
        <Head>
          <title>Compressed.fm</title>
          <script src="https://cdn.usefathom.com/script.js" data-site="TRUYKXEJ" defer />
          <meta name="title" content={title} />
          <meta name="description" content={description} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={baseUrl} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={`${baseUrl}/images/podcast-cover.jpg`} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={baseUrl} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:image" content={`${baseUrl}/images/podcast-cover.jpg`} />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}

export default MyApp;

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const GlobalStyle = createGlobalStyle`
  /* DankMono */
  @font-face {
    font-family: 'DankMono';
    src: url('/fonts/dank/DankMono-Bold.woff2') format('woff2'), /* Modern Browsers */
         url('/fonts/dank/DankMono-Bold.otf') format('opentype'); /* Safari, Android, iOS */
    font-style: normal;
    font-weight: bold;
    text-rendering: optimizeLegibility;
  }

  @font-face {
    font-family: 'DankMono';
    src: url('/fonts/dank/DankMono-Regular.woff2') format('woff2'), /* Modern Browsers */
         url('/fonts/dank/DankMono-Regular.otf') format('opentype'); /* Safari, Android, iOS */
    font-style: normal;
    text-rendering: optimizeLegibility;
  }

  @font-face {
    font-family: 'DankMono';
    src: url('/fonts/dank/DankMono-Italic.woff2') format('woff2'), /* Modern Browsers */
         url('/fonts/dank/DankMono-Italic.otf') format('opentype'); /* Safari, Android, iOS */
    font-style: italic;
    text-rendering: optimizeLegibility;
  }

  @font-face {
    font-family: 'Greycliff';
    src: url('/fonts/greycliff/GreycliffCF-Bold.eot'),
        url('/fonts/greycliff/GreycliffCF-Bold.woff') format('woff'),
        url('/fonts/greycliff/GreycliffCF-Bold.woff2') format('woff2');
    font-style: normal;
    font-weight: bold;
    text-rendering: optimizeLegibility;
  }

  @font-face {
    font-family: 'Greycliff';
    src: url('/fonts/greycliff/GreycliffCF-BoldOblique.eot'),
        url('/fonts/greycliff/GreycliffCF-BoldOblique.woff') format('woff'),
        url('/fonts/greycliff/GreycliffCF-BoldOblique.woff2') format('woff2');
    font-style: italic;
    font-weight: bold;
    text-rendering: optimizeLegibility;
  }

  @font-face {
    font-family: 'Greycliff';
    src: url('/fonts/greycliff/GreycliffCF-Heavy.eot'),
        url('/fonts/greycliff/GreycliffCF-Heavy.woff') format('woff'),
        url('/fonts/greycliff/GreycliffCF-Heavy.woff2') format('woff2');
    font-style: normal;
    font-weight: 900;
    text-rendering: optimizeLegibility;
  }

  @font-face {
    font-family: 'Greycliff';
    src: url('/fonts/greycliff/GreycliffCF-Regular.eot'),
        url('/fonts/greycliff/GreycliffCF-Regular.woff') format('woff'),
        url('/fonts/greycliff/GreycliffCF-Regular.woff2') format('woff2');
    font-style: normal;
    text-rendering: optimizeLegibility;
  }

  @font-face {
    font-family: 'Greycliff';
    src: url('/fonts/greycliff/GreycliffCF-RegularOblique.eot'),
        url('/fonts/greycliff/GreycliffCF-RegularOblique.woff') format('woff'),
        url('/fonts/greycliff/GreycliffCF-RegularOblique.woff2') format('woff2');
    font-style: italic;
    text-rendering: optimizeLegibility;
  }

  html, html > body, body {
    background: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
    font-family: ${(props) => props.theme.sansSerif};
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  svg {
    fill: currentColor;
  }
`;
