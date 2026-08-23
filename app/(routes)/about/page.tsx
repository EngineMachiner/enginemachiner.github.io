
import { readFile } from "fs/promises";
import { PropsWithChildren } from "react";

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

    const className = titleFont.className + " text-[clamp(3rem,5vw,6rem)] mb-[3vh] text-center"
    const h1 = <h1 className={className}>{title}</h1>

    return <TitleMotion>{h1}</TitleMotion>

}

const file = randomPath( assets.art, false )

async function Art() {

    const art = await readFile( file, "utf8" )

    const className = "art-panel text-green-500 text-right"
    const Pre = <pre className={className}>{art}</pre>;         return <div className="relative bg-black/75">{Pre}</div>

}

function Gap( { children }: PropsWithChildren ) { 
    
    return <div className="w-full h-[clamp(4rem,7vh,5rem)] content-center">{children}</div>

}

async function Components() {

    let Element = <div className="flex-grow m-[2rem]"><Title/><Body/></div>

    Element = <div className="flex portrait:flex-col bg-black/75 min-h-[86vh]">{Element}<Art/></div>

    return <><ConnectButton/><Gap/>{Element}<Gap><Credits/></Gap></>

}

export default async function About() {
    
    return <div className="relative"><ParticlesLoader/><Components/></div>

}