
"use client"

import Image from "next/image"
import { useContext } from "react";

import { copyContexts } from "./Context";

type Props = { src: string,     copy: string }

export default function CopyImage( props: Props ) {

    const { src, copy } = props;            const [ StateContext, DispatchContext ] = copyContexts
    
    const animate = useContext( StateContext );         const setAnimate = useContext( DispatchContext )

    async function onPointerDown() { await navigator.clipboard.writeText(copy);          setAnimate( animate + 1 ) }

    return <div className="contact" onPointerDown={onPointerDown}><Image src={src} alt={src} fill priority/></div>

}