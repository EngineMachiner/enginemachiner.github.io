
"use client"

import Link from "next/link"
import { RichTagsFunction } from "next-intl"

import { infoFont } from "../util"
import Translation from "./language/Translation"

const font = infoFont.className

const URL = "https://www.patreon.com/posts/20170210-gif-8052202"

export default function Credits() {

    let className = font + " text-[clamp(0.9rem,1.75vw,1.25rem)] whitespace-pre-wrap"

    const artist: RichTagsFunction = chunks => {
    
        return <Link className={ className + " textLink" } href={URL} key="artist-link">{chunks}</Link>

    }

    const Text = <Translation translationKey="credits" values={{artist}}/>

    const Credits = <p className={className}>{Text}</p>

    return <div className="ml-[clamp(1.5rem,1vw,2rem)]">{Credits}</div>

}