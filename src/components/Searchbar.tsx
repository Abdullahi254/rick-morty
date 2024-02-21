'use client'

import React, { useState, useRef, useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
type Props = {}

const Searchbar = (props: Props) => {
    const [searchOption, setSearchOption] = useState<string>('Options')
    const [show, setShow] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        // handles logic when outside the dropdown div is clicked the div closes automaically
        const handleOutSideClick = (event: MouseEvent) => {
            if (!ref.current?.contains(event.target as Node)) {
                setShow(false)
            }
        };

        window.addEventListener("mousedown", handleOutSideClick);

        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [ref]);

    //function to get search option
    const handleSearchOption = (searchOption:string)=>{
        setSearchOption(searchOption)
        setShow(false)
    }
    return (
        <form className='w-full flex justify-center items-center space-x-4'>
            <div className='border-2 border-gray-800 rounded-lg bg-black flex items-center p-4 space-x-2 relative' ref={ref}>
                <div className='text-xs lg:text-sm text-white cursor-pointer' onClick={() => setShow(true)}>
                    {searchOption}
                </div>
                <span className='cursor-pointer' onClick={() => setShow(true)}>
                    {show ? <RiArrowDropDownLine className="font-bold text-white text-2xl" /> :
                        <RiArrowDropDownLine className="font-bold text-white text-2xl rotate-180" />
                    }
                </span>
                {
                    show &&
                    <div className='absolute bg-black h-[150px] w-[200px] -left-2 top-16'>
                        <ul className='text-white space-y-4 p-4'>
                            <li className='hover:bg-gray-900 px-2 cursor-pointer' onClick={()=>handleSearchOption('Location')}>Location</li>
                            <li className='hover:bg-gray-900 px-2 cursor-pointer' onClick={()=>handleSearchOption('Ch-Name')}>Character Name</li>
                            <li className='hover:bg-gray-900 px-2 cursor-pointer' onClick={()=>handleSearchOption('Episode')}>Episode</li>
                        </ul>
                    </div>
                }

            </div>

            <div className="relative w-[80%]">
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm md:text-base font-semibold text-gray-100 border border-gray-800 rounded-lg bg-black" placeholder="Search" required />
                <span className='absolute left-0 top-5 ps-4 text-base md:text-[20px]'>
                    <CiSearch className="font-bold text-white" />
                </span>
            </div>
        </form>
    )
}

export default Searchbar