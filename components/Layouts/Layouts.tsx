import React, { useState } from "react";
import { ReactElement } from "react";
import Navigationbar from "../Navigationbar/Navigationbar";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ( { children}: { children: ReactElement }) => {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigationbar />
        <div>
            <div className="hidden md:block">
                <Sidebar />
            </div>
            <main className="absolete ml-0 md:ml-72 min-h-screen border-l border-solid border-slate-700">
                {children}
            </main>
        </div>
    </div>
    );
  }
export default Layout;
