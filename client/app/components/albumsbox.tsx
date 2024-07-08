import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CATHARSIS from '@/public/catharsis.png'

function AlbumsBox() {
  return (
    <div className='flex justify-start'>
      <div className='px-2'>
        <Link href='/music/catharsis-i'>
            <Image
            src={CATHARSIS}
            alt='CATHARSIS'
            width='100'
            height='100'
            className="cursor-pointer m-auto"
            priority
            />
            <p className='text-sm pt-2 m-auto'>CATHARSIS I</p>
        </Link>
      </div>
    </div>
  )
}

export default AlbumsBox