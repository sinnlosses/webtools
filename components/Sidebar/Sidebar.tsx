import React from 'react'
import Link from 'next/link'
import {SidebarData} from './SidebarData'

export default function Sidebar() {
  return (
    <aside className='bg-slate-900 w-full md:w-60'>
      <nav>
        <ul>
          {SidebarData.map((value, key) => (
            <li className='m-2' key={key}>
              <Link href={value.link}>
                <a
                  className={`flex flex-row p-2 bg-slate-900 rounded 
                              hover:bg-slate-700 cursor-pointer`}
                >
                  <div>{value.icon}</div>
                  <div>{value.title}</div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}