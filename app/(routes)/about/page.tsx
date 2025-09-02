
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

    className += "portrait:text-[6vh]";           const h1 = <h1 className={className}>{title}</h1>

    return <TitleMotion>{h1}</TitleMotion>

}

const file = randomPath( assets.art, false )

async function Art() {

    const art = await readFile( file, "utf8" )

    const className = "p-[4vmin] text-green-500 text-[1vmin] portrait:text-[1.5vmin] text-right"

    const Pre = <pre className={className}>{art}</pre>;         return <div className="relative bg-black/75">{Pre}</div>

}

function Gap( { children }: PropsWithChildren ) { 
    
    return <div className="w-full h-[7vh] content-center">{children}</div>

}

async function Components() {

    const Filler = <div className="w-full h-[26vh] portrait:h-[15vh]"></div>

    let Element = <div className="flex-grow m-[4vh]"><Title/><Body/>{Filler}</div>

    Element = <div className="flex portrait:flex-col bg-black/75">{Element}<Art/></div>

    return <><ConnectButton/><Gap/>{Element}<Gap><Credits/></Gap></>

}

export default async function About() {
    
    return <div className="relative"><ParticlesLoader/><Components/></div>

}