import React from 'react'
import { cardsHuntersData } from '@/lib/data'
import Image from 'next/image'
import { GiStrong } from 'react-icons/gi'
import { BiBrain } from 'react-icons/bi'

type CardProps = (typeof cardsHuntersData)[number]


export default function Card({
  name,
  nen,
  image,
  strenght,
  intelligence,
}: CardProps) {
  return (
    <div className="cardBorder mb-5">
      <div className='cardBorderUp'></div>
      <div className='cardBorderLeft'></div>
      <div className='cardBorderRight'></div>
      <div className='cardBorderDown'></div>

      <Image
        className='w-[100%] h-[100%] object-cover'
        src={image}
        alt={`Carta de ${name}`}
      />

      <div className='cardInfo'>
        <span className='text-base'>{name}</span>
        <span className='text-xs'>{nen}</span>
      </div>

      <div className='circleAttribute circleStrenght'>
        <span>{strenght}</span>
      </div>
      <div className='circleAttribute circleIntelligence'>
        <span>{intelligence}</span>
      </div>

    </div>
  )
}
