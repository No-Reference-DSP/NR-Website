import React, { Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ReactHowler from 'react-howler'
import PLACEHOLDER from '@/public/ep 1.png'

function HowlerPlayer() {
  return (
    <div id='howlerplayer' className='flex flex-col max-w-500 w-[400px] px-4 py-16 bg-slate-200 rounded'>
        <h1 className='mx-auto'>Track Title</h1>
        <p className='mx-auto'>Artist name</p>

      <div className='flex justify-center py-4'>
        <Suspense fallback={<h1>loading...</h1>}>
          <Image
                src={PLACEHOLDER}
                alt="ACIDJAMSEP"
                width="200"
                height="200"
                className="cursor-pointer"
                priority
              />
        </Suspense>
      </div>
      <div className='flex justify-evenly py-4'>
        <button className='font-light bg-white rounded px-3 py-2 hover:bg-slate-200'>PREV</button>
        <button className='font-light bg-white rounded px-3 py-2 hover:bg-slate-200'>START/STOP</button>
        <button className='font-light bg-white rounded px-3 py-2 hover:bg-slate-200'>NEXT</button>
      </div>
    </div>
  )
}

export default HowlerPlayer