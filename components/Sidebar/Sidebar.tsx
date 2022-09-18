import React from 'react'
import Link from 'next/link'
import {Home, ToolContents, Setting} from './SidebarData'

type ParentType = {
  title: string,
  icon: JSX.Element,
  link: string,
};

type ChildType = {
  title: string,
  link: string,
};

const ParentListItem = (props: ParentType) => {
  return (
    <li className='m-2'>
      <Link href={props.link}>
        <a className={`flex p-2 rounded hover:bg-slate-700 cursor-pointer`}>
          <div className='mx-2'>{props.icon}</div>
          <div className='mx-2'>{props.title}</div>
        </a>
      </Link>
    </li>
  );
};

const ChildListItem = (props: ChildType) => {
  return (
    <li className='ml-10 m-2'>
      <Link href={props.link}>
        <a className={`flex p-2 rounded hover:bg-slate-700 cursor-pointer`}>
          <div className='mx-2 opacity-50'>{props.title}</div>
        </a>
      </Link>
    </li>
  );
};

export default function Sidebar() {
  return (
    <aside className='bg-slate-900 h-screen md:w-72 hidden md:block fixed z-20 overflow-y-scroll'>
      <nav>
        <ul>
          {/* ホーム */}
          <ParentListItem key={Home.title} title={Home.title} icon={Home.icon} link={Home.link} />

          {/* Webツール */}
          {ToolContents.map((pvalue, key) => (
            <div key={pvalue.title}>
              <ParentListItem key={pvalue.title} title={pvalue.title} icon={pvalue.icon} link={pvalue.link} />
              {pvalue.children.map((cvalue, key) => (
                  <ChildListItem key={cvalue.title} title={cvalue.title} link={cvalue.link} />
              ))}
            </div>
          ))}

          {/* 設定 */}
          <ParentListItem key={Setting.title} title={Setting.title} icon={Setting.icon} link={Setting.link} />

          {/* 余白 */}
          <div className='my-20'></div>
        </ul>
      </nav>
    </aside>
  )
}