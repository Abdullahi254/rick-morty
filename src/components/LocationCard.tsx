"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { CombinedList } from '@/types'



const LocationCard = ({
  location,
  residentsData
}: CombinedList) => {
  const [visibleCount, setVisibleCount] = useState<number>(5);
  const handleMoreClick = () => {
    setVisibleCount(prevCount => prevCount + 5);
  };
  return (
    <div className='bg-black border-2 border-gray-800 shadow-lg shadow-white flex flex-col space-y-2 p-4'>
      <h2 className='text-white'>{location}</h2>
      {residentsData.slice(0, visibleCount).map((res, index) =>
        <div key={index} className='w-full flex flex-col justify-start'>
          <Image src={res.image} alt={res.name} width={50} height={50}/>
          <h2 className='text-white'>{res.name}</h2>
          <h2 className='text-white'>{res.status}</h2>
        </div>)}
      {
        residentsData.length > 5 && <button onClick={handleMoreClick} className='text-blue-300 underline text-end'>
          More
        </button>
      }

    </div>
  )
}

export default LocationCard