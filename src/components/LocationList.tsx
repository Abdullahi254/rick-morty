import React from 'react'
import LocationCard from './LocationCard'
import { CHInfo, CombinedList, LInfo } from '@/types'

type Props = {
  combinedList: CombinedList[]
  searchOption: string
  searchedWord?: string
}

const LocationList = ({ combinedList, searchOption, searchedWord }: Props) => {
  return (
    <>
      {(searchedWord) && (searchOption === "Ch-Name") &&
        <h1 className='text-white text-center mt-2 text-lg lg:text-xl bg-black p-2 rounded-lg'>
          <span className='text-blue-300 mr-2'>{searchedWord}</span>
          can be found in these locations:
        </h1>
      }
      <div className={
        searchOption === "Location" && searchedWord ? 
        'w-full max-w-6xl p-6':
        'grid grid-cols-1 lg:grid-cols-3  gap-4 mt-4 p-4 items-start'
      }>
        {
          combinedList.map((data, index) => <LocationCard key={index} location={data.location} residentsData={data.residentsData} />)
        }
      </div>
    </>

  )
}

export default LocationList