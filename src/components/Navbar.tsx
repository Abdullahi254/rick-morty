'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../../public/logo.png"
import { usePathname } from 'next/navigation'

type Props = {}

const Navbar = (props: Props) => {

    const [shadow, setShadow] = useState<boolean>(false)
    const pathName = usePathname()

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])
    return (
        <nav className={shadow ? `shadow-xl bg-gradient-to-r from-[#1e1f1a] to-[#000000] fixed top-0 w-full min-h-[120] max-h-[200px] border-b-[1px] border-gray-700 px-8 z-[100]` : ` bg-black fixed top-0 w-full min-h-[120px] max-h-[200px] border-b-[1px] border-gray-800 px-8 z-[100]`}>
            <div className=' flex flex-col space-y-4 justify-center h-full mx-auto max-w-7xl p-4'>


                <div className='w-full flex justify-center pt-2'>
                    <Link href="/">
                        <Image src={logo} alt='R&M icon' height={80} priority className='cursor-pointer w-auto h-auto' />
                    </Link>
                </div>

                <div className='w-full flex justify-center space-x-6'>
                    <Link href="/">
                        <span className={pathName === '/' ? `text-sm text-gray-100 underline` : `text-gray-100 text-sm hover:text-gray-300 hover:underline`}>
                            Home
                        </span>
                    </Link>
                    <Link href="/characters">
                        <span className={pathName === `/characters` ? `text-sm text-gray-100 underline` : `text-gray-100 text-sm hover:text-gray-300 hover:underline`}>
                            Characters
                        </span>
                    </Link>
                    <Link href="/episodes">
                        <span className={pathName === '/episodes' ? `text-sm text-gray-100 underline` : `text-gray-100 text-sm hover:text-gray-300 hover:underline`}>
                            Episodes
                        </span>
                    </Link>
                </div>

            </div>
        </nav>
    )
}

export default Navbar