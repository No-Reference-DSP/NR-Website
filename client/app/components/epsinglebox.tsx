import React from 'react'
import Image from 'next/image'
import ACIDJAMS from '@/public/acidjamsEP.png'
import FLEETFOOT from '@/public/fleetfootwerk_single.png'

function EPSingleBox() {
  return (
    <div className='flex justify-start'>
      <div className='px-2'>
        <Image
          src={ACIDJAMS}
          alt='ACIDJAMS2'
          width='100'
          height='100'
          className="cursor-pointer m-auto"
          priority
        />
        <p className='text-sm pt-2 m-auto'>ACID JAMS EP</p>
      </div>
      <div className='px-2'>
        <Image
          src={FLEETFOOT}
          alt='FLEETFOOTWERK'
          width='100'
          height='100'
          className="cursor-pointer m-auto"
          priority
        />
        <p className='text-sm pt-2 m-auto'>Fleetfoot Werk - Single</p>
      </div>
    </div>
  )
}

export default EPSingleBox