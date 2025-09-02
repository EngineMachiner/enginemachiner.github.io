
import { readFile } from "fs/promises";
import React, { PropsWithChildren } from "react";

import assets from "@/app/assets";
import { titleFont, randomPath } from "@/app/util";

import Body from "./components/Body";
import Credits from "@/app/components/Credits";
import TitleMotion from "./components/TitleMotion";
import { ParticlesLoader } from "@/app/components/Particles";
import Translation from "@/app/components/language/Translation";
import ConnectButton from "@/app/(routes)/about/components/ConnectButton";

function Title() {

    const title = <Translation translationKey="title"/>

    let className = titleFont.className + " mb-[3vh] text-[min(6vw,10vh)] text-center "

    className += "portrait:text-[6vh]";           const Element = <h1 className={className}>{title}</h1>

    return <TitleMotion>{Element}</TitleMotion>

}

function Gap( { children }: PropsWithChildren ) { 
    
    return <div className="w-full h-[7vh] content-center">{children}</div>

}

const file = randomPath( assets.art, false )

async function Art() {

    const art = await readFile( file, "utf8" )

    const className = "p-[4vmin] text-green-500 text-[1vmin] portrait:text-[1.5vmin] text-right"

    const Pre = <pre className={className}>{art}</pre>;         return <div className="relative bg-black/75">{Pre}</div>

}

async function Components() {

    let Element = <div className="w-full h-[26vh] portrait:h-[15vh]"></div>

    Element = <div className="flex-grow m-[4vh]"><Title/><Body/>{Element}</div>

    Element = <div className="flex portrait:flex-col bg-black/75">{Element}<Art/></div>

    Element = <Gap><Credits/></Gap>;           return <><ConnectButton/><Gap/>{Element}{Gap}</>

}

export default async function About() {
    
    return <div className="relative"><ParticlesLoader/><Components/></div>

}