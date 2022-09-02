import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { rtlCache } from '../rtl-cache';
import { useState } from 'react';

function CustomApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Head>
        <title>Welcome to werkstatt-app!</title>
      </Head>
      <main className="app">
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              colorScheme: colorScheme,
            }}
            emotionCache={rtlCache}
          >
            <Component {...pageProps} />
          </MantineProvider>
        </ColorSchemeProvider>
      </main>
    </>
  );
}

export default CustomApp;
