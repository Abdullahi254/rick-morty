"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { CombinedList } from '@/types'



const LocationCard = ({
  location,
  residentsData
}: CombinedList) => {
  const [visibleCount, setVisibleCount] = useState<number>(5);
  //when more button is clicked increase the visible count by an interval of five
  const handleMoreClick = () => {
    setVisibleCount(prevCount => prevCount + 5);
  };
  //when less button is clicked reduce the visible count by an interval of five
  const handleLessClick = () => {
    setVisibleCount(prevCount => prevCount - 5);
  }
  return (
    <div className='bg-black border-2 border-gray-800 shadow-lg shadow-white flex flex-col space-y-2 py-4 px-4 w-full'>
      <h1 className='text-base lg:text-lg text-blue-300 text-center tracking-wide'>{location}</h1>

      {residentsData.length > 1 ? residentsData.slice(0, visibleCount).map((res, index) =>
        <li key={index} className='w-full grid grid-cols-2 gap-8 items-center border-b-2 border-blue-300 py-4'>
          <div className='flex items-center space-x-2'>
            <Image src={res.image} alt={res.name} width={50} height={50} className='rounded-full' />
            <h2 className='text-white text-xs lg:text-sm cursor-pointer hover:underline hover:text-gray-300'>{res.name}</h2>
          </div>
          <h2 className='text-white text-xs lg:text-sm mr-1'>Status: <span className={`${res.status === 'Dead' ? 'text-red-400' : res.status === 'Alive' ? 'text-green-400' : 'text-white'} `}>{res.status}</span></h2>
        </li>) :
        <h1 className='text-red-400 text-center text-xs'>NO RESIDENTS FOUND !</h1>
      }
      <div className='flex justify-between pt-4'>
        {
          visibleCount >= 10 && <button onClick={handleLessClick} className='text-red-300 underline text-end text-xs lg:text-sm'>
            Less
          </button>
        }
        {
          (residentsData.length > 5 && visibleCount < residentsData.length-1) && <button onClick={handleMoreClick} className='text-green-300 underline text-end text-xs lg:text-sm'>
            More
          </button>
        }
      </div>


    </div>
  )
}

export default LocationCard