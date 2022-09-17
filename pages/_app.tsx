import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import Layout from '../components/Layouts/Layouts'

type NextPageWithLayout = NextPage & {
  getLayout?: (page:ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
