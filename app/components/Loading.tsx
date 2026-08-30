
"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, JSX, useEffect } from "react";

import { useAssets } from "./Assets";
import { Directory, randomPath, sanitizePath } from "@/app/util";

function preload( directory: Directory ): JSX.Element[] {

    return directory.children!.flatMap( child => {
    
        let path = child.path;            path = sanitizePath(path)

        return child.children ? preload(child) : <Image src={path} key={path} alt="Preloaded Image" fill/>

    } )

}

// Preloaded images.

function Images() {

    const assets = useAssets()
    
    const Emojis = preload( assets.emojis );           const Connect = preload( assets.connect )
    
    const Home = <Image src={"/home.png"} alt="home" fill loading="eager"/>

    return <div className="fixed hidden">{Home}{Emojis}{Connect}</div>

}

export default function Loading() {

    const [ y, setY ] = useState("0");          function open() { setY("-100dvh") }
    

    const assets = useAssets()

    const icons = assets.loadingIcons;          const [src, setSrc] = useState("")

    // Intentional client-only initialization to avoid hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect( () => { setSrc( "/" + randomPath(icons) ) }, [icons] );
    
    const color = "bg-gradient-to-b from-indigo-500 to-red-500"

    let className = "h-dvh flex items-center justify-center " + color;

    if ( !src ) return <div className={ className + " fixed w-full z-30" }/>

    const Video = ( 
        <video
            className="size-[50vh] portrait:size-[50vw] motion-reduce:hidden"
            src={src}
            preload="metadata"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            onCanPlay={open}
            onError={open}
        />
    )

    let Element = <div className={className}>{Video}</div>


    className = "fixed inset-0 z-20"
    
    const transition = { delay: 1, duration: 3 };        const animate = { y: y }

    return <motion.div className={className} animate={animate} transition={transition}><Images/>{Element}</motion.div>

}