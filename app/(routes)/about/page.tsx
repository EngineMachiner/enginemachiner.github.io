
import { PropsWithChildren } from "react";

import assets from "@/app/assets";
import { titleFont } from "@/app/util";

import Art from "./components/Art";
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


function Gap( { children }: PropsWithChildren ) { 
    
    return <div className="w-full h-[clamp(4rem,7vh,5rem)] content-center">{children}</div>

}

const arts = assets.art

async function Components() {

    let Element = <div className="flex-grow m-[2rem]"><Title/><Body/></div>

    Element = <div className="flex portrait:flex-col bg-black/75 min-h-[86vh]">{Element}<Art paths={arts}/></div>

    return <><ConnectButton/><Gap/>{Element}<Gap><Credits/></Gap></>

}

export default async function About() {
    
    return <div className="relative"><ParticlesLoader/><Components/></div>

}