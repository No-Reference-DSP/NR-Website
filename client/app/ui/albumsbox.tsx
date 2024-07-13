import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CATHARSIS from '@/public/catharsis.png'

function AlbumsBox() {
  return (
    <div className='flex justify-start'>
      <div className='px-2 py-2 hover:border border-slate-300'>
        <Link href='/music/catharsis-i'>
            <Image
            src={CATHARSIS}
            alt='CATHARSIS'
            width='125'
            height='125'
            className="cursor-pointer m-auto border"
            priority
            />
            <p className='text-sm pt-2 m-auto'>CATHARSIS I</p>
        </Link>
      </div>
    </div>
  )
}

export default AlbumsBox