import React from 'react'
import LocationCard from './LocationCard'
import { CHInfo, CombinedList, LInfo } from '@/types'

type Props = {
  combinedList: CombinedList[]
}

const LocationList = ({combinedList}: Props) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3  gap-4 mt-4 p-4 items-start'>
       {
        combinedList.map((data, index)=><LocationCard key={index} location={data.location} residentsData={data.residentsData}/>)
       }
    </div>
  )
}

export default LocationList