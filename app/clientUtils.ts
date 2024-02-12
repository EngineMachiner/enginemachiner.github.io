
'use client'

import { useState, useEffect } from 'react'

export interface WindowSize { width: number,    height: number }

export function useWindowSize() {

    let [ w, h ] = [ 0, 0 ]

    if ( typeof window !== "undefined" ) [ w, h ] = [ window.innerWidth, window.innerHeight ]

    const [ windowSize, setWindowSize ] = useState( { width: w, height: h } )

    useEffect( () => {

        function handleResize() { setWindowSize( { width: window.innerWidth,   height: window.innerHeight } ) }

        window.addEventListener( 'resize', handleResize )
        
        return () => window.removeEventListener( 'resize', handleResize )
    
    } )

    return windowSize

}