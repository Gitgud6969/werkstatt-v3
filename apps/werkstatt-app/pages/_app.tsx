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
                gold: [
                  'hsl(40, 94, 65)',
                  'hsl(40, 96, 54)',
                  'hsl(40, 98, 49)',
                  'hsl(40, 98, 41)',
                  'hsl(40, 98, 34)',
                ],
                primary: [
                  'hsl(209, 42%, 71%)',
                  'hsl(208, 43%, 68%)',
                  'hsl(208, 42%, 54%)',
                  'hsl(207, 44%, 49%)',
                  'hsl(208, 44%, 41%)',
                  'hsl(208, 44%, 31%)',
                  'hsl(208, 44%, 25%)',
                ],
                black: ['#000000', '#18191B'],
                orange: [
                  'hsl(21,  71%, 56%)',
                  'hsl(21,  71%, 52%)',
                  'hsl(21,  81%, 47%)',
                  'hsl(21, 100%, 41%)',
                  'hsl(21, 100%, 38%)',
                  'hsl(21, 100%, 34%)',
                  'hsl(21, 100%, 31%)',
                ],
                dark: [
                  'hsl(200, 10%, 94%)',
                  'hsl(207, 7%, 75%)',
                  'hsl(210, 7%, 60%)',
                  'hsl(209, 10%, 40%)',
                  'hsl(210, 28%, 20%)',
                  'hsl(212, 28%, 14%)',
                  'hsl(212, 28%, 12%)',
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
