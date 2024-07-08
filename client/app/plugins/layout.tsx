import React from 'react'

function PluginLayout({
  children, // nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex justify-center'>
      {children}
    </div>
  )
}

export default PluginLayout