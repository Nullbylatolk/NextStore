'use client'

import { useEffect } from "react"

interface ErrorProps {
    error: Error & { digest?: string }
    reset: () => void
}

export default function Error({error,reset}:ErrorProps ) {
    useEffect(()=>{
        console.log(error)
    },[])
    return (
        <div>
            <h2>Sucedio un error!{error.message}</h2>
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}