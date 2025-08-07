
"use client"

import { motion, TargetAndTransition, Transition } from "framer-motion";

import Contact from "./Contact";

const contacts: any = {

    "discord.png": { copy: "engine_machiner" },
    "mail.png": { copy: "mfpc98@gmail.com" },

    "github.png": { href: "https://github.com/EngineMachiner" },
    "youtube.png": { href: "https://youtube.com/@Engine_Machiner" },
    "steam.png": { href: "https://steamcommunity.com/id/Engine_Machiner" }

}

export default function Contacts() {

    const components = []

    for ( const src in contacts ) {
        
        const { copy, href } = contacts[src]

        components.push( <Contact key={src} src={src} copy={copy} href={href}/> )
    
    }


    let className = "fixed grid grid-cols-3 portrait:grid-cols-2 gap-[8vmin] bg-green-400 p-[8vmin] rounded-[4vh]"

    const div = <div className={className}>{components}</div>


    let initial: TargetAndTransition = { y: innerHeight }

    const transition: Transition = { delay: 0.3,        duration: 1 }

    let animate: TargetAndTransition = { y: 0,       transition: transition }


    // On portrait.

    if ( innerHeight > innerWidth ) {
        
        initial = { x: innerWidth };            animate = { x: 0,       transition: transition }
    
    }


    className = "flex justify-center items-center h-[100dvh]"

    return <motion.div className={className} initial={initial} animate={animate}>{div}</motion.div>
    
}