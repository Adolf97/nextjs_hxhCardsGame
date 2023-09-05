import React from 'react'

export default function Header() {
  return (
    <header className='fixed flex justify-start w-full h-auto p-3 bg-orange-500 z-[999]'>
      <div className='flex flex-col items-center ml-10'>
        <span className='text-xl font-semibold text-white'>Hunter x Hunter</span>
        <span className='text-sm font-semibold text-white'>Cards Game</span>
      </div>
    </header>
  )
}
