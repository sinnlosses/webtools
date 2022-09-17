import React from "react";
import { ReactElement } from "react";
import Navigationbar from "../Navigationbar/Navigationbar";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ( { children}: { children: ReactElement }) => {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigationbar />
        <div className="flex flex-col md:flex-row flex-1">
          <aside className="bg-slate-900 w-full md:w-64 border-2 border-solid border-slate-700">
            <Sidebar />
          </aside>
          <main className="flex-1 border-2 border-solid border-slate-700">{children}</main>
        </div>
    </div>
    );
  }
export default Layout;
