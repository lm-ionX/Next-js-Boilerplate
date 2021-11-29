import React, { ReactNode, useEffect } from 'react';

import { useAtom } from 'jotai';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/main.css';
import '../styles/anicons.css';
import '../styles/print.css';
import '../styles/fonts/Anicons/anicons-regular.css';

import { displayAtom } from '../store/display';

type GetLayout = (page: ReactNode) => ReactNode;

// eslint-disable-next-line @typescript-eslint/ban-types
type Page<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type MyAppProps<P = {}> = AppProps<P> & {
  Component: Page<P>;
};

const defaultGetLayout: GetLayout = (page: ReactNode): ReactNode => page;

function MyApp({ Component, pageProps }: MyAppProps): JSX.Element {
  const getLayout = Component.getLayout ?? defaultGetLayout;
  const [, setDisplay] = useAtom(displayAtom);

  useEffect(() => {
    if (window) {
      const width = window.innerWidth;
      setDisplay({ isOnlyLogo: width <= 1024, isMini: width <= 800 });
    }
  }, [setDisplay]);

  return (
    <>
      <Head>
        <title>My site</title>
      </Head>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
