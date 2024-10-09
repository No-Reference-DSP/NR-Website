import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/noreferencelogo.png'
import {CgMenu} from "react-icons/cg"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

function Navbar() {
  return (
    <nav className="flex justify-center fixed sticky h-24 shadow-xl bg-slate-400">
      <div className='sm:w-9/12 max-w-[1500px] sm:mx-auto'>

        <div className="flex justify-between item-center h-full w-full 2xl:px-16">
          <div className='min-w-52'>
            <Link href='/'>
                <Image
                    src={Logo}
                    alt="Logo"
                    width="240"
                    height="130"
                    className="cursor-pointer"
                    priority
                />
            </Link>
          </div>

          <div className='mt-10 pl-10 pr-4'>
            <div className='md:hidden'>
              <Menu>
                <div className='inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm'>
                  <MenuButton>
                    <CgMenu size={32}/>
                    <MenuItems transition anchor="bottom" className="absolute right-0 mt-2 w-56 origin-top-right rounded-sm divide-y-2 divide-dashed divide-slate-100 bg-slate-200 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                      <MenuItem>
                        <a href="/plugins" className="block px-4 py-4 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                          Plugins
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a href="/music" className="block px-4 py-4 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                          Music  
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a href="/contact" className="block px-4 py-4 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                          Contact 
                        </a>
                      </MenuItem>
                    </MenuItems>
                  </MenuButton>
                </div>
              </Menu>
                
            </div>
            <ul className="hidden md:flex">
              <Link href='/plugins'>
                  <li className='ml-10 uppercase hover:border-b text-xl'>Plugins</li>
              </Link>
              <Link href='/music'>
                  <li className='ml-10 uppercase hover:border-b text-xl'>Music</li>
              </Link>
              <Link href='/contact'>
                  <li className='ml-10 uppercase hover:border-b text-xl'>Contact</li>
              </Link>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar