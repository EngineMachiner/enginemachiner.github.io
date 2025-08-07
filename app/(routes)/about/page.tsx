
import React from "react";
import { readFile } from "fs/promises";

import assetsTree from "@/app/assets";
import { titleFont, ChildrenProps, randomInTree } from "@/app/util";

import Body from "./Body";
import TitleMotion from "./TitleMotion";
import { ParticlesLoader } from "@/app/components/Particles";
import ConnectButton from "@/app/(routes)/about/ConnectButton";
import Translation from "@/app/components/language/Translation";
import Background, { Credits } from "@/app/components/Background";

function Title() {

    const title = <Translation translationKey="title"/>

    let className = titleFont.className + " mb-[3vh] text-[min(6vw,10vh)] text-center "

    className += "portrait:text-[6vh]";           const h1 = <h1 className={className}>{title}</h1>

    return <TitleMotion>{h1}</TitleMotion>

}

function Gap( { children }: ChildrenProps ) { 
    
    return <div className="w-full h-[7vh] content-center">{children}</div>

}

const tree = assetsTree.art;          const file = randomInTree( tree, false )

async function Art() {

    const art = await readFile( file, "utf8" )

    const className = "p-[4vmin] text-green-500 text-[1vmin] portrait:text-[1.5vmin] text-right"

    const pre = <pre className={className}>{art}</pre>;         return <div className="relative bg-black/75">{pre}</div>

}


async function Components() {

    let gap = <div className="w-full h-[26vh] portrait:h-[15vh]"></div>

    let div = <div className="flex-grow m-[4vh]"><Title/><Body/>{gap}</div>

    div = <div className="flex portrait:flex-col bg-black/75">{div}<Art/></div>

    gap = <Gap><Credits/></Gap>;           return <><ConnectButton/><Gap/>{div}{gap}</>

}

export default async function About() {

    return <div className="relative"><ParticlesLoader/><Background/><Components/></div>

}