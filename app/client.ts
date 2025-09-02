
"use client"

import { useEffect, useState } from "react";

function size() { return { x: innerWidth,       y: innerHeight } }

export function useWindowSize(): { x: number; y: number } {

    const [ currentSize, setSize ] = useState( size() )

    useEffect( () => {
    
        const resize = () => setSize( size() );         window.addEventListener( "resize", resize )

        return () => window.removeEventListener( "resize", resize )

    }, [] )

    return currentSize
    
}