
"use client"

import { join } from "path";
import { PointerEvent } from "react";
import { useTranslations } from "next-intl";
import { motion, Transition } from "framer-motion";
import { IParticlesOptions, RecursivePartial } from "@tsparticles/engine";

import { useWindowSize } from "@/app/client";
import { bodyFont, Directory, randomPath } from "@/app/util";

import { useAssets } from "@/app/components/Assets";
import { particlesContainer } from "@/app/components/Particles";

const keywords: Record< string, string > = {
    
    Hello: "wave.png",          Spanish: "spanish.png",          English: "english.png"

}

function path( keyword: string, directory: Directory ) {

    let path = keywords[keyword];           if (path) return join( "emojis/", path )

    const child = directory.children!.find( child => child.name === keyword )

    return child ? randomPath(child) : undefined

}

function pointerPosition( event: PointerEvent ) {

    const scale = devicePixelRatio

    return { x: event.pageX * scale,     y: event.pageY * scale }

}

function particles() { return particlesContainer!.particles! }

type Options = RecursivePartial<IParticlesOptions>

type Props = { child: Child };          type Child = { text: string;       keyword?: string }

function Text( { child }: Props ) {

    const { text, keyword } = child;            const emojis = useAssets().emojis


    let className = bodyFont.className + " text-[3vh] portrait:text-[5vw] whitespace-pre-wrap mb-[0.375vh]"

    const Space = <span className={className}> </span>;         useWindowSize()

    if ( !keyword ) return <span className={className}>{text}{Space}</span>


    function spawn( event: PointerEvent ) {

        let n = particles().count;            if ( n > 21 ) return

        
        n = 7

        for ( let i = 0; i <= n; i++ ) {

            const time = 500 * i / n;           const src = path( keyword!, emojis )

            const size = Math.min( innerWidth, innerHeight / 40 )

            const options: Options = {

                size: { value: size },

                shape: { type: "image",     options: { image: { src: src } } },

                move: {

                    enable: true,       direction: "top",       speed: 21,       random: true,

                    gravity: { enable: true,    acceleration: 9.81 },           outModes: { default: "none",        bottom: "destroy" }

                },

            }


            const pos = pointerPosition(event)

            setTimeout( () => { particles().addParticle( pos, options ) }, time )

        }

    }


    className += " specialText cursor-pointer"

    return <span className={className} onPointerDown={spawn}>{text}{Space}</span>

}

export default function Body() {

    const body: Child[][] = useTranslations().raw("body")

    const texts = body.map( (sentence, i) => {
    
        const words = sentence.map( (child, i) => <Text child={child} key={i}/> )
    
        return <div className="flex flex-wrap" key={i}>{words}</div>

    } )

    const Element = <div className="max-w-[150vh]">{texts}</div>


    const initial = { opacity: 0,       x: -50 }

    const transition: Transition = { delay: 0.6,        duration: 0.6 }

    const animate = { opacity: 1,       x: 0,       transition: transition }

    return <motion.div initial={initial} animate={animate}>{Element}</motion.div>

}