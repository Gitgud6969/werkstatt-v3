import { ParallaxProvider } from 'react-scroll-parallax';
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
              colorScheme: 'dark',
              breakpoints: {
                sm: 688,
                md: 992,
                lg: 1312,
              },
              colors: {
                black: ['#000000', '#18191B'],
                orange: ['#D34900', '#8D3A0F', '#542B17'],
                dark: [
                  '#D1E0ED',
                  '#283C4E',
                  '#273949',
                  '#253544',
                  '#243240',
                  '#232F3B',
                  '#202831',
                  '#1D2228',
                  '#1C1F23',
                  '#1A1B1E',
                ],
                light: [
                  '#2B4257',
                  '#283C4E',
                  '#273949',
                  '#253544',
                  '#243240',
                  '#232F3B',
                  '#202831',
                  '#1D2228',
                  '#1C1F23',
                  '#1A1B1E',
                ],
              },
            }}
            emotionCache={rtlCache}
          >
            <ParallaxProvider>
              <Component {...pageProps} />
            </ParallaxProvider>
          </MantineProvider>
        </ColorSchemeProvider>
      </main>
    </>
  );
}

export default CustomApp;
