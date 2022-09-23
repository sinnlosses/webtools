import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { NextPage } from 'next';
import Layout from '../components/Layouts/Layouts'
import { useWindowSize } from 'react-use'

type NextPageWithLayout = NextPage & {
  getLayout?: (page:ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

type TSidebarContext = {
  sidebarStatus: string,
  setSidebarStatus: React.Dispatch<React.SetStateAction<string>>
}

export const SidebarClassName = {
  toggleOff: "hidden md:block",
  toggleOn: "block",
};

export const SidebarContext = React.createContext({} as TSidebarContext);

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const [sidebarStatus, setSidebarStatus] = useState(SidebarClassName.toggleOff);

  const {height, width} = useWindowSize();
  useEffect(() => {
    setSidebarStatus(SidebarClassName.toggleOff);
  }, [width, height]);

  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);
  return (
    <SidebarContext.Provider value={{sidebarStatus, setSidebarStatus}}>
      {getLayout(<Component {...pageProps} />)}
    </SidebarContext.Provider>
  );
}

export default MyApp;
