import React from 'react'
import Card from './card'
import { cardsHuntersData } from '@/lib/data'

export default function Cards() {
  return (
    <div className='w-full h-auto p-2'>
      <h1 
        className='text-2xl font-bold text-center pt-3 pb-10'>
        Hunters Cards
      </h1>
      <div className='grid grid-cols-4 gap-4'>
        {
          cardsHuntersData.map((cardHunter, index) => (
            <React.Fragment key={index}>
              <Card {...cardHunter} />
            </React.Fragment>
          ))
        }
      </div>
    </div>
  )
}
