import React from "react";
import { ReactElement } from "react";
import Navigationbar from "../Navigationbar/Navigationbar";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ( { children}: { children: ReactElement }) => {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigationbar />
        <div className="flex flex-1 w-full">
            <Sidebar />
            <main className="flex-1 border-l border-solid border-slate-700">
                {children}
            </main>
        </div>
    </div>
    );
  }
export default Layout;
