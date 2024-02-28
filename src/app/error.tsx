'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <main className="flex flex-col items-center min-h-screen mt-[120px] lg:mt-[200px] p-6 max-w-7xl mx-auto">
            <h2 className='text-red-500 text-lg lg:text-xl text-center'>Something went wrong!</h2>
            <button
                className='text-white underline'
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </main>
    )
}