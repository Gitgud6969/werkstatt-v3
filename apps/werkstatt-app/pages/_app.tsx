import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';
import { MantineProvider } from '@mantine/core';
import { rtlCache } from '../rtl-cache';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to werkstatt-app!</title>
      </Head>
      <main className="app">
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: 'dark',
          }}
          emotionCache={rtlCache}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </main>
    </>
  );
}

export default CustomApp;
