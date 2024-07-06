import React from 'react'
import Link from 'next/link'

function Contact() {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col justify-start w-[1000px] m-auto py-10 px-10 underline-dashed'>
        <div className='py-10 px-10 divide-dashed divide-y divide-y-2'>
          <h1 className='font-light text-3xl mb-2'>Contact</h1>
          <ul>
            <p className='text-xl my-2'>If you have questions or feedback about the plugins or just want to chat about audio, 
              <br></br> feel free to reach out!  
            </p>
            <li className='my-2 text-xl'>Github: <Link className='hover:underline' href='https://github.com/No-Reference-DSP'>https://github.com/No-Reference-DSP</Link></li>
            <li className='my-2 text-xl'>Email: no.reference.music@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact