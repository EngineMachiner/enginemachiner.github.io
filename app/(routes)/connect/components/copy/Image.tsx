
"use client"

import Image from "next/image"
import { useCopyCount } from "./Context";

type Props = { src: string,     copy: string }

export default function CopyImage( { src, copy }: Props ) {

    const [ count, setCount ] = useCopyCount()

    async function onPointerDown() { await navigator.clipboard.writeText(copy);          setCount( count + 1 ) }

    return <div className="contact" onPointerDown={onPointerDown}><Image src={src} alt={src} fill priority/></div>

}