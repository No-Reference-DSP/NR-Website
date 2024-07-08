import React from 'react'
import Image from 'next/image'
import EPSingleBox from '@/app/components/epsinglebox'
import AlbumsBox from '@/app/components/albumsbox'

function ProjectsPage() {
  return (
    <div id='musicProjects' className='w-[800px] py-6 px-6'>
      <div id='titleplaceholder' className='py-2'>
        
      </div>
      <div id='albums' className='p-3'>
        <h1 className='font-light text-lg underline underline-slate-200 pb-1'>Albums</h1>
        <AlbumsBox/>
      </div>
      <div id='epSingles' className='p-3'>
        <h1 className='font-light text-lg underline underline-slate-200 pb-1'>EPs / Singles </h1>
        <EPSingleBox/>
      </div>
      
    </div>
  )
}

export default ProjectsPage