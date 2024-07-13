import React, {Suspense} from 'react'


function MusicLayout({
  children, // nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col'>
        {children}
      </div>
    </div>
  )
}

export default MusicLayout