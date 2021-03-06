
import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import { Box } from '@mui/material';
import Menu from '../components/menu';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      {/* <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Box
          sx={{
            display: 'flex',
          }}
        >
            <Menu />
            <Box
              component='main'
              sx={{
                flexGrow: 1
              }}
            >
              <Component {...pageProps} />
            </Box>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}