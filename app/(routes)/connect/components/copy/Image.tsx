
"use client"

import Image from "next/image"
import { useCopyCount } from "./Context";

type Props = { src: string,     copy: string }

export default function CopyImage( { src, copy }: Props ) {

    const [ , setCount ] = useCopyCount()

    async function onClick() {
        
        try { await navigator.clipboard.writeText(copy);          setCount( i => i + 1 ) }
        catch { console.error("Failed to copy to clipboard!") }
    
    }

    return <button className="contact" type="button" aria-label={`Copy ${copy}`} onClick={onClick}><Image src={src} alt={src} fill loading="eager"/></button>

}