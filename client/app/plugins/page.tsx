import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MBRComponent from '../components/mbr-delay-comp'

export default function Plugins() {

    return (
      <div className="w-9/12 static mx-12 my-12 divide-y-2 divide-dashed divide-y">
        <div>
          <h1 className='font-light text-3xl align-middle'>
            Plugins
          </h1>
          <p className='font-light text-s'>For your creative toolset</p>
        </div>
        
        <div className='flex justify-around pt-6 pb-6'>
          <MBRComponent/>
        </div>

      </div>

    )
}