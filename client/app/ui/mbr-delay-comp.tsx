import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MBR_DELAY_PNG from '@/public/MBR-Delay.png'

function MBRComponent() {
  return (
    <div className='flex flex-col justify-between'>
        <Link href='/plugins/mbr-delay'>
            <h1 className='font-bold pb-2 hover:underline'>MBR-DELAY</h1>
        </Link>
        <div className='outline hover:outline-blue-200'>
            <Link href='/plugins/mbr-delay'>
            <Image
                src={MBR_DELAY_PNG}
                alt="MBR-Delay"
                width="400"
                height="200"
                className="cursor-pointer"
                priority
            />
            </Link>
        </div>
        <div className='max-w-[400px] mt-4'>
            <p className='text-left'> 
                A modern digital delay with individual controls for <br></br>left and right channels.
            </p>
        </div>
        <div className='flex justify-end px-2 py-4'>
            <span className='px-5 py-1 text-bold font-light inline-block align-middle text-center'>Free </span>
            <Link href='/plugins/mbr-delay'>
                <button className='font-semibold bg-white border border-slate-400 rounded px-3 py-1 hover:bg-slate-200'>
                    Learn More
                </button>
            </Link>
        </div>
        
    </div>
  )
}

export default MBRComponent