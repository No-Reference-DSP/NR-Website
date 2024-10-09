'use client'
import React from 'react'
import Link from 'next/link'
import AlbumsBox from '../ui/albumsbox'
import EPSingleBox from '../ui/epsinglebox'

function Music() {
  
  return (
    <div className="w-full static mx-12 my-12 divide-y-2 divide-dashed divide-y">
        <div>
          <h1 className='font-light text-3xl align-middle'>
            Music Catalog
          </h1>
        </div>
       

        <div id='musicProjects' className='w-[800px] py-6 px-6'>
          <div id='titleplaceholder' className='py-2'>
        
          </div>
          <div id='albums' className='p-3'>
            <h1 className='font-light text-2xl underline underline-slate-200 pb-1'>Albums</h1>
            <AlbumsBox/>
          </div>
          <div id='epSingles' className='p-3'>
            <h1 className='font-light text-2xl underline underline-slate-200 pb-1'>EPs / Singles </h1>
            <EPSingleBox/>
           </div>
      
        </div>

    </div>
  )
}

export default Music