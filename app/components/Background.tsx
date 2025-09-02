
"use client"

import { usePathname } from "next/navigation"

export default function Background() {

    const path = usePathname()


    let className = "object-cover size-full"

    let Video = <video className={className} src="/background.webm" preload="metadata" autoPlay loop muted/>

    Video = <div className="fixed w-screen h-screen bg-black">{Video}</div>


    className = "fixed w-screen h-[50vh] top-[50vh] bg-gradient-to-b to-blue-600 from-transparent"

    const Gradient = <div className={className}/>

    
    className = "fixed -z-10";              if ( path === "/connect" ) className += " bg-brightness-50 blur"

    return <div className={className}>{Video}{Gradient}</div>

}