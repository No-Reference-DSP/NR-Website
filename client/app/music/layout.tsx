import React, {Suspense} from 'react'


function MusicLayout({
  children, // nested layout
  player,
  projects
}: {
  children: React.ReactNode
  player: React.ReactNode
  projects: React.ReactNode
}) {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col'>
        {children}
        <div className='flex justify-between m-auto'>
          {player}
          {projects}
        </div>
      </div>
    </div>
  )
}

export default MusicLayout