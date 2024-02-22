import React from 'react'
import { CHInfo, LInfo, Location } from '@/types'

type Props = {
    option:string
    locationList: LInfo[]
    charList: CHInfo[]
    suggestionWord?: string
    takeWord: (word:string)=>void
    clearSuggestionBox: ()=>void 
}



const DropDownSearch = ({option, locationList, charList, suggestionWord, takeWord, clearSuggestionBox }: Props) => {
    const captureWord = (val:string)=>{
        console.log("word captured", val)
        takeWord(val)
        clearSuggestionBox()
    }
    if (suggestionWord && option==="Location") {
        const filteredList = locationList.filter(location => location.name.toLowerCase().startsWith(suggestionWord.toLocaleLowerCase()))
        return (
            <div className='bg-black shadow-lg shadow-gray-500 border-1 border-black p-4 space-y-3'>

                {filteredList.map(location =>
                    <li key={location.id} className='text-white w-full hover:bg-gray-900 cursor-pointer list-none' onClick={()=>captureWord(location.name)}>
                        {location.name}
                    </li>)}

            </div>
        )
    }
    if (suggestionWord && option==="Ch-Name") {
        const filteredList = charList.filter(char => char.name.toLowerCase().startsWith(suggestionWord.toLocaleLowerCase()))
        return (
            <div className='bg-black shadow-lg shadow-gray-500 border-1 border-black p-4 space-y-3'>

                {filteredList.map(char =>
                    <li key={char.id} className='text-white w-full hover:bg-gray-900 cursor-pointer list-none' onClick={()=>captureWord(char.name)}>
                        {char.name}
                    </li>)}

            </div>
        )
    }
}

export default DropDownSearch