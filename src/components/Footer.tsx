'use client';

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../../public/logo.png"
import { usePathname } from 'next/navigation'

type Props = {}

const Footer = (props: Props) => {
    const pathName = usePathname()

    return (
        <nav className="w-full min-h-12 bg-gradient-to-r from-[#000000] to-[#1e1f1a] border-t-[1px] border-gray-800 px-8 py-2 z-[100] flex justify-evenly items-center flex-wrap">
                <div className='cursor-pointer'>
                    <Image src={logo} width={60} height={60} alt='sheng icon' priority className='w-auto h-auto'/>
                </div>
                <div className='space-x-8'>
                    <Link href="/">
                        <span className={pathName === '/' ? `text-gray-500 text-sm hover:text-gray-100 hover:underline underline`: 'text-gray-500 text-sm hover:text-gray-100 hover:underline'}>
                            Home
                        </span>
                    </Link>
                    <Link href="/characters">
                        <span className={pathName === '/characters' ? `text-gray-500 text-sm hover:text-gray-100 hover:underline underline`: 'text-gray-500 text-sm hover:text-gray-100 hover:underline'}>
                            Characters
                        </span>
                    </Link>
                    <Link href="/episodes">
                        <span className={pathName === '/episodes' ? `text-gray-500 text-sm hover:text-gray-100 hover:underline underline`: 'text-gray-500 text-sm hover:text-gray-100 hover:underline'}>
                            Epidsodes
                        </span>
                    </Link>
                    <Link href="https://github.com/Abdullahi254" target='_blank'>
                        <span className={`text-gray-500 text-sm hover:text-gray-100 hover:underline`}>
                            Github
                        </span>
                    </Link>
                </div>
        </nav>
    )
}

export default Footer
