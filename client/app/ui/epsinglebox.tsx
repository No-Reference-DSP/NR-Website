import React from 'react'
import Image from 'next/image'
import ACIDJAMS from '@/public/acidjamsEP.png'
import FLEETFOOT from '@/public/fleetfootwerk_single.png'
import BPROT from '@/public/bp&r.jpg'

function EPSingleBox() {
  return (
    <div className='flex justify-start'>
      <div className='px-2 py-2 hover:border border-slate-300'>
        <Image
          src={ACIDJAMS}
          alt='ACIDJAMS2'
          width='125'
          height='125'
          className="cursor-pointer m-auto border"
          priority
        />
        <p className='text-sm pt-2 m-auto'>ACID JAMS EP</p>
      </div>
      <div className='px-2 py-2 hover:border border-slate-300'>
        <Image
          src={FLEETFOOT}
          alt='FLEETFOOTWERK'
          width='125'
          height='125'
          className="cursor-pointer m-auto border"
          priority
        />
        <p className='text-sm pt-2 m-auto'>Fleetfoot Werk - Single</p>
      </div>

      <div className='px-2 py-2 hover:border border-slate-300'>
        <Image
          src={BPROT}
          alt='BEPRETTYANDROT'
          width='125'
          height='125'
          className='cursor-pointer m-auto border'
          priority
        />
        <p className='text-sm pt-2 m-auto'>Be Pretty & Rot</p>
      </div>
    </div>
  )
}

export default EPSingleBox