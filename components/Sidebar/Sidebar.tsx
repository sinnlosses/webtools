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

const ParentContent = (props: ParentType) => {
  return (
    <li className='m-2' key={props.title}>
    <Link href={props.link}>
      <a className={`flex p-2 rounded hover:bg-slate-700 cursor-pointer`}>
        <div className='mx-2'>{props.icon}</div>
        <div className='mx-2'>{props.title}</div>
      </a>
    </Link>
  </li>
  );
};

const ChildContent = (props: ChildType) => {
  return (
    <li className='m-2' key={props.title}>
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
    <aside className='bg-slate-900 md:w-72 hidden md:block'>
      <nav>
        <ul>
          {/* ホーム */}
          <ParentContent title={Home.title} icon={Home.icon} link={Home.link} />

          {/* Webツール */}
          {ToolContents.map((pvalue, key) => (
            <>
              <ParentContent title={pvalue.title} icon={pvalue.icon} link={pvalue.link} />
              <div className='ml-10'>
                {pvalue.children.map((cvalue, key) => (
                    <ChildContent title={cvalue.title} link={cvalue.link} />
                ))}
              </div>
            </>
          ))}
          {/* 設定 */}
          <ParentContent title={Setting.title} icon={Setting.icon} link={Setting.link} />
        </ul>
      </nav>
    </aside>
  )
}