
"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState, JSX } from "react";

import { useAssets } from "./Assets";
import { Directory, randomPath, sanitizePath } from "@/app/util";

function preload( directory: Directory ): JSX.Element[] {

    return directory.children!.flatMap( child => {
    
        let path = child.path;            path = sanitizePath(path)

        return child.children ? preload(child) : <Image src={path} key={path} alt="Preloaded Image" fill priority/>

    } )

}

// Preloaded images.

function Images() {

    const assets = useAssets()
    
    const Emojis = preload( assets.emojis );           const Connect = preload( assets.connect )
    
    const Home = <Image src={"home.png"} alt="home" fill priority/>

    return <div className="fixed hidden">{Home}{Emojis}{Connect}</div>

}

export default function Loading() {

    const state = useState('0');        const [ y, setY ] = state

    const open = useCallback( () => setY("-100%"), [] );        useEffect( () => { setTimeout( open, 2000 ) }, [] )
    

    const assets = useAssets()

    const icons = assets.loadingIcons;           const [src] = useState( () => randomPath(icons) )

    const Video = <video src={src} preload="metadata" autoPlay loop muted/>

    let className = "fixed size-[50vmin]";          let Element = <div className={className}>{Video}</div>


    const color = "bg-gradient-to-b from-indigo-500 to-red-500"

    className = "h-[100dvh] grid place-items-center " + color;        Element = <div className={className}>{Element}</div>


    className = "fixed w-screen z-20"
    
    const transition = { delay: 1, duration: 3 };        const animate = { y: y }

    return <motion.div className={className} animate={animate} transition={transition}><Images/>{Element}</motion.div>

}