
"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useContext, useEffect, useState } from "react";

import { TreeContext } from "./TreeProvider";
import { ChildrenProps, randomInTree, sanitizePath } from "@/app/util";

function preload( tree: any ) {

    return tree.children.map( ( child: any, i: number ) => {
    
        let path = child.path;            path = sanitizePath(path)

        return child.children ? preload(child) : <Image src={path} alt="Preloaded Image" key={i} fill priority/>

    } )

}

function Images() {

    const assetsTree = useContext( TreeContext )!
    
    let emojis = assetsTree.emojis;           let connect = assetsTree.connect

    emojis = preload(emojis);           connect = preload(connect)
    
    const home = <Image src={"home.png"} alt="home" fill priority/>

    return <div className="fixed hidden">{home}{emojis}{connect}</div>

}

export default function Loading( { children }: ChildrenProps ) {

    const state = useState('0');        const [ y, setY ] = state

    const open = useCallback( () => setY("-100%"), [] );        useEffect( () => { setTimeout( open, 2000 ) } )


    const assetsTree = useContext( TreeContext )!

    const tree = assetsTree.loadingIcons;           const [src] = useState( () => randomInTree(tree) )

    const video = <video src={src} preload="metadata" autoPlay loop muted/>

    let className = "fixed size-[50vmin]";          let div = <div className={className}>{video}</div>


    const color = "bg-gradient-to-b from-indigo-500 to-red-500"

    className = "h-screen grid place-items-center " + color;        div = <div className={className}>{div}</div>


    className = "fixed w-screen z-20";          const images = Images()

    const transition = { delay: 1, duration: 3 };        const animate = { y: y }

    div = <motion.div className={className} animate={animate} transition={transition}>{images}{div}</motion.div>

    
    return <>{div}{children}</>

}