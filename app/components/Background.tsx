
import Link from "next/link"
import Image from "next/image"

import { infoFont } from "../util"
import Translation from "./language/Translation"

const font = infoFont.className

const URL = "https://www.patreon.com/posts/20170210-gif-8052202"

export function Credits() {

    const className = font + " text-[2vh] portrait:text-[1.75vh] whitespace-pre-wrap"
    
    const link = <Link className={ className + " textLink" } href={URL} key="artist-link">1041uuu</Link>

    const translation = <Translation translationKey="credits" values={{ artist: link }}/>

    const credits = <p className={className}>{translation}</p>

    return <div className="ml-[2vh]">{credits}</div>

}


export default function Background( { blur }: { blur?: boolean } ) {

    let className = "object-cover size-full";           if (blur) className += " blur"

    let video = <video className={className} src="/background.webm" preload="metadata" autoPlay loop muted/>

    video = <div className="fixed w-screen h-screen bg-black">{video}</div>


    className = "fixed w-screen h-[50vh] top-[50vh] bg-gradient-to-b to-blue-600 from-transparent"

    const gradient = <div className={className}/>

    
    return <div className="fixed -z-10">{video}{gradient}</div>

}