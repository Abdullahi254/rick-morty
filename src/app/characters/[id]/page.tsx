import CharacterCard from '@/components/CharacterCard'
import NotesCard from '@/components/NotesCard'
import { CHInfo } from '@/types'
import React from 'react'

type Props = {
    params: { id: string }
}
const getCharacterInfoById = async (id: string): Promise<CHInfo | undefined> => {
    try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const result = await res.json()
        if (result.error) {
            throw Error("ERROR FETCHING CHARACTER!")
        }
        return result
    } catch (er) {
        console.log(er)
    }
}
const Characters = async ({ params }: Props) => {
    const character = await getCharacterInfoById(params.id)
    if (character) {
        return (
            <main className="flex flex-col items-center min-h-screen mt-[200px] p-6 max-w-7xl mx-auto">
                <CharacterCard character={character} />
                <NotesCard charId={params.id}/>
            </main>
        )
    }
    else {
        return (
            <main className="flex flex-col items-center min-h-screen mt-[200px] p-6 max-w-7xl mx-auto">
                <div className='text-red-500 tracking-wide text-lg lg:text-xl'>COULD NOT FETCH CHARACTER!</div>
            </main>
        )
    }
}

export default Characters