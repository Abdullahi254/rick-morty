import { CHInfo } from '@/types'
import Image from 'next/image'
import React from 'react'

type Props = {
    character: CHInfo
}

const CharacterCard = ({character}: Props) => {
  return (
    <div className='w-full md:w-[70%] flex flex-col space-y-4 p-4 bg-black shadow-white shadow-lg rounded-lg'>
        <Image src={character?.image} alt={character.name} width={200} height={200} priority/>
        <ul className='p-2 space-y-2'>
            <li className='text-white text-sm tracking-widest'>Name: <span className='ml-2 text-blue-300'>{character.name}</span></li>
            <li className='text-white text-sm tracking-widest'>Status: <span className={`${character.status === 'Dead' ? 'text-red-400' : character.status === 'Alive' ? 'text-green-400' : 'text-white'} `}>{character.status}</span></li>
            <li className='text-white text-sm tracking-widest'>Species: <span className='ml-2 text-blue-300'>{character.species}</span></li>
            <li className='text-white text-sm tracking-widest'>Type: <span className='ml-2 text-blue-300'>{character.type}</span></li>
            <li className='text-white text-sm tracking-widest'>Gender: <span className='ml-2 text-blue-300'>{character.gender}</span></li>
            <li className='text-white text-sm tracking-widest'>Origin: <span className='ml-2 text-blue-300'>{character.origin.name}</span></li>
            <li className='text-white text-sm tracking-widest'>Location: <span className='ml-2 text-blue-300'>{character.location.name}</span></li>
            <li className='text-white text-sm tracking-widest'>Featured Episodes: <span className='ml-2 text-blue-300'>{character.episode.length}</span></li>
        </ul>
    </div>
  )
}

export default CharacterCard