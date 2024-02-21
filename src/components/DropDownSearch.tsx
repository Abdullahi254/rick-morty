import React from 'react'
import { LInfo, Location } from '@/types'

type Props = {
    locationList: Location<LInfo>
    suggestionWord?: string
    takeWord: (word:string)=>void
    clearSuggestionBox: ()=>void 
}



const DropDownSearch = ({ locationList, suggestionWord, takeWord, clearSuggestionBox }: Props) => {
    const captureWord = (val:string)=>{
        console.log("word captured", val)
        takeWord(val)
        clearSuggestionBox()
    }
    if (suggestionWord) {
        const filteredList = locationList.results.filter(location => location.name.toLowerCase().startsWith(suggestionWord.toLocaleLowerCase()))
        return (
            <div className='bg-black shadow-lg shadow-gray-500 border-1 border-black p-4 space-y-3'>

                {filteredList.map(location =>
                    <li key={location.id} className='text-white w-full hover:bg-gray-900 cursor-pointer list-none' onClick={()=>captureWord(location.name)}>
                        {location.name}
                    </li>)}

            </div>
        )
    }
}

export default DropDownSearch