import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { NextPage } from "next";
import Layout from "../components/Layouts/Layouts";
import { SidebarClassName } from "../components/Sidebar/Sidebar";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

/**
 * サイドバーの表示、非表示を扱うコンテキストの型
 */
type TSidebarContext = {
  sidebarStatus: string;
  setSidebarStatus: React.Dispatch<React.SetStateAction<string>>;
};

// サイドバーの表示、非表示を扱うコンテキスト
export const SidebarContext = React.createContext({} as TSidebarContext);

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // サイドバーの表示、非表示状態を管理
  const [sidebarStatus, setSidebarStatus] = useState(
    SidebarClassName.toggleOff
  );

  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);
  return (
    <SidebarContext.Provider value={{ sidebarStatus, setSidebarStatus }}>
      {getLayout(<Component {...pageProps} />)}
    </SidebarContext.Provider>
  );
}

export default MyApp;
