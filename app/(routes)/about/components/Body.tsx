
"use client"

import { join } from "path";
import { PointerEvent } from "react";
import { useTranslations } from "next-intl";
import { motion, Transition } from "framer-motion";
import { IParticlesOptions, RecursivePartial } from "@tsparticles/engine";

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

    const ratio = particlesContainer?.retina?.pixelRatio ?? 1

    return { x: event.pageX * ratio,     y: event.pageY * ratio }

}

function particlesManager() { return particlesContainer?.particles }

type Options = RecursivePartial<IParticlesOptions>

type Props = { child: Child };          type Child = { text: string;       keyword?: string }

function Text( { child }: Props ) {

    const { text, keyword } = child;            const emojis = useAssets().emojis


    let className = bodyFont.className + " text-[clamp(1.25rem,1.25vw,1.75rem)]"

    if ( !keyword ) return <span className={className}>{text}</span>


    function spawn( event: PointerEvent ) {

        const particles = particlesManager();       if ( !particles ) return

        let n = particles.count;                    if ( n > 21 ) return

        
        n = 7

        for ( let i = 0; i <= n; i++ ) {

            const time = 500 * i / n;           const src = path( keyword!, emojis )

            let size = Math.min( innerWidth, innerHeight );         size = Math.max( 20, size / 50 )

            const options: Options = {

                size: { value: size },

                shape: { type: "image",     options: { image: { src: src } } },

                move: {

                    enable: true,       direction: "top",       speed: 21,       random: true,

                    gravity: { enable: true,    acceleration: 9.81 },
                    
                    outModes: {
                        
                        default: "none",        bottom: "destroy",          left: "destroy",        right: "destroy"
                    
                    }

                },

            }


            const pos = pointerPosition(event)

            setTimeout( () => { particles.addParticle( pos, options ) }, time )

        }

    }


    className += " specialText cursor-pointer"

    return <span className={className} onPointerDown={spawn}>{text}</span>

}

export default function Body() {

    const body: Child[][] = useTranslations().raw("body")

    const texts = body.map( (sentence, i) => {
    
        const words = sentence.map( (child, i) => <Text child={child} key={i}/> )
    
        return <div className="flex flex-wrap gap-x-[0.35em] leading-[1.6] mb-[2rem]" key={i}>{words}</div>

    } )

    const Element = <div className="landscape:max-w-[95%]">{texts}</div>


    const initial = { opacity: 0,       x: -50 }

    const transition: Transition = { delay: 0.6,        duration: 0.6 }

    const animate = { opacity: 1,       x: 0,       transition: transition }

    return <motion.div initial={initial} animate={animate}>{Element}</motion.div>

}