"use client"

import React, {useEffect, useState} from 'react'

type Props = {
    charId:string
}

// Notes are saved in the localstorage
export async function createNotes(charId: string, formData: FormData) {
    try {
        const notes = formData.get("notes")
        if (notes) {
            window.localStorage.setItem(charId, notes as string)
        }
    } catch (er) {
        console.log(er)
    }

}

const NotesCard = ({charId}: Props) => {
    const [notes, setNotes] = useState<string>()
    // binding character id to form action function
    const createNotesWithId = createNotes.bind(null, charId)
    // get character notes from local storage
    useEffect(()=>{
        let value
        value = localStorage.getItem(charId) || ""
        setNotes(value)
    },[charId])
    return (
        <form className='w-full' action={createNotesWithId}>
            <div className='w-full md:w-[70%] flex flex-col space-y-4 p-4 bg-black shadow-white shadow-lg rounded-lg mt-12 items-start mx-auto'>
                <label htmlFor='notes' className='text-blue-300'>Take down notes</label>
                <textarea name='notes' id="notes" rows={10} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your notes here..." defaultValue={notes ? notes : ""}>
                </textarea>
                <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
                    save
                </button>
            </div>

        </form>

    )
}

export default NotesCard