
"use client"

import { useEffect, useState } from "react";

function size() { return { x: innerWidth,       y: innerHeight } }

export function useWindowSize() {

    const [ _, setSize ] = useState( size() )

    useEffect( () => {
    
        const resize = () => setSize( size() );         window.addEventListener( "resize", resize )

        return () => window.removeEventListener( "resize", resize )

    } )

}

export function useDisableContextMenu() {

    useEffect( () => {

        const onMenu = ( listener: MouseEvent ) => {

            const target = listener.target

            const isImage = target instanceof HTMLImageElement
            const isVideo = target instanceof HTMLVideoElement

            if ( isImage || isVideo ) listener.preventDefault() 

        }

        document.addEventListener( "contextmenu", onMenu )

        return () => document.removeEventListener( "contextmenu", onMenu )

    } )

}