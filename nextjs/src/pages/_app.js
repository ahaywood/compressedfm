/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Router, { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';
import Head from 'next/head';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { UserProvider } from '@auth0/nextjs-auth0';
import NProgress from 'nprogress';
import Theme from '../styles/Theme';

// Bind nProgress Bar
Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const { user } = pageProps;
  const router = useRouter();

  // FATHOM ANALYTICS
  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load('TRUYKXEJ', {
      includedDomains: ['compressed.fm'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);

  return (
    <UserProvider user={user}>
      <ThemeProvider theme={Theme}>
        <Head>
          <title>Compressed.fm</title>
          <link rel="stylesheet" type="text/css" href="/css/nprogress.css" />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default MyApp;

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
