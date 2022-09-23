import React, { useContext, useState } from "react";
import { ReactElement } from "react";
import Navigationbar from "../Navigationbar/Navigationbar";
import Sidebar from "../Sidebar/Sidebar";
import { SidebarContext } from "../../pages/_app";

const Layout = ( { children}: { children: ReactElement }) => {

    const {sidebarStatus, setSidebarStatus} = useContext(SidebarContext);

    return (
      <div className="min-h-screen flex flex-col">
        <Navigationbar />
        <div>
            <div className={sidebarStatus}>
                <Sidebar />
            </div>
            <main className="absolete ml-0 md:ml-72 min-h-screen">
                {children}
            </main>
        </div>
    </div>
    );
  }
export default Layout;
