import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ACIDJAMS from '@/public/acidjamsEP.png'
import FLEETFOOT from '@/public/fleetfootwerk_single.png'
import BPROT from '@/public/bp&r.jpg'

function EPSingleBox() {
  return (
    <div className='flex justify-start'>
      <Link href='music/acidjamsep'>
        <div className='px-2 py-2 hover:border border-slate-300'>
          <Image
            src={ACIDJAMS}
            alt='ACIDJAMS2'
            width='200'
            height='200'
            className="cursor-pointer m-auto border"
            priority
          />
          <p className='text-sm pt-2 m-auto'>ACID JAMS EP</p>
        </div>
      </Link>

      <Link href='music/fleetfoot-werk'>
        <div className='px-2 py-2 hover:border border-slate-300'>
          <Image
            src={FLEETFOOT}
            alt='FLEETFOOTWERK'
            width='200'
            height='200'
            className="cursor-pointer m-auto border"
            priority
          />
          <p className='text-sm pt-2 m-auto'>Fleetfoot Werk - Single</p>
        </div>
      </Link>
      
      <Link href='music/bepretty&rot'>
        <div className='px-2 py-2 hover:border border-slate-300'>
          <Image
            src={BPROT}
            alt='BEPRETTYANDROT'
            width='200'
            height='200'
            className='cursor-pointer m-auto border'
            priority
          />
          <p className='text-sm pt-2 m-auto'>Be Pretty & Rot</p>
        </div>
      </Link>
    </div>
  )
}

export default EPSingleBox