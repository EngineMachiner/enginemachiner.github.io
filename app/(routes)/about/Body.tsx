
"use client"

import { join } from "path";
import { useTranslations } from "next-intl";
import { useContext, PointerEvent } from "react";
import { motion, Transition } from "framer-motion";

import { useWindowSize } from "@/app/client";
import { bodyFont, randomInTree } from "@/app/util";

import { TreeContext } from "@/app/components/TreeProvider";
import { particlesContainer } from "@/app/components/Particles";

const keywords: { [ key: string ]: any } = {
    
    Hello: "wave.png",          Spanish: "spanish.png",          English: "english.png"

}

function path( keyword: string, tree: any ) {

    let path = keywords[keyword];           if (path) return join( "emojis/", path )

    const subTree = tree.children.find( ( x: any ) => x.name === keyword )

    return randomInTree( subTree )

}

function pointerPosition( event: PointerEvent ) {

    const scale = window.devicePixelRatio

    return { x: event.pageX * scale,     y: event.pageY * scale }

}

function particles() { return particlesContainer!.particles! }

type Props = { child: Child };          type Child = { text: string;       keyword?: string }

function Text( { child }: Props ) {

    const { text, keyword } = child;            const assetsTree = useContext( TreeContext )


    let className = bodyFont.className + " text-[3vh] portrait:text-[5vw] whitespace-pre-wrap mb-[0.375vh]"

    const space = <span className={className}> </span>;         useWindowSize()

    if ( !keyword ) return <span className={className}>{text}{space}</span>


    const tree = assetsTree.emojis

    function spawn( event: PointerEvent ) {

        let n = particles().count;            if ( n > 21 ) return

        n = 7;        const pos = pointerPosition(event)

        for ( let i = 0; i <= n; i++ ) {

            const time = 500 * i / n;           const src = path( keyword!, tree )

            const size = Math.min( innerWidth, innerHeight / 40 )

            const options: any = {

                size: { value: size },

                shape: { type: "image",     options: { image: { src: src } } },

                move: {

                    enable: true,       direction: "top",       speed: 21,       random: true,

                    gravity: { enable: true,    acceleration: 9.81 },           outModes: { default: "destroy" }

                },

            }

            setTimeout( () => { particles().addParticle( pos, options ) }, time )

        }

    }


    className += " specialText cursor-pointer"

    return <span className={className} onPointerDown={spawn}>{text}{space}</span>

}

export default function Body() {

    const body: Child[][] = useTranslations().raw("body")

    const texts = body.map( (sentence, i) => {
    
        const words = sentence.map( (child, i) => <Text child={child} key={i}/> )
    
        return <div className="flex flex-wrap" key={i}>{words}</div>

    } )

    const div = <div className="max-w-[150vh]">{texts}</div>


    const initial = { opacity: 0,       x: -50 }

    const transition: Transition = { delay: 0.6,        duration: 0.6 }

    const animate = { opacity: 1,       x: 0,       transition: transition }

    return <motion.div initial={initial} animate={animate}>{div}</motion.div>

}