import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/noreferencelogo.png'

function Navbar() {
  return (
    <nav className="flex justify-center fixed sticky h-24 shadow-xl bg-slate-400">
      <div className='w-9/12 max-w-[1500px] mx-auto'>

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
            <ul className="hidden sm:flex">
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