import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GithubLogo from '@/public/github-mark.png'



function Footer() {
  return (
    <footer className='mt-auto h-20 bg-slate-400 shadow-xl content-center'>
      <div className='flex w-full w-9/12 max-w-[1500px] mx-auto justify-between px-10 2xl:px-16'>
        <span className="inline-block align-middle text-center">© 2024, No Reference DSP</span>
        <Link href="https://github.com/No-Reference-DSP">
          <Image
            src={GithubLogo}
            alt="GithubLogo"
            width="30"
            height="30"
            className="cursor-pointer"
            priority
          />
        </Link>
      </div>
       
    </footer>
  )
}

export default Footer