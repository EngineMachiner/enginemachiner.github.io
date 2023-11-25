'use client'

import { IParticlesOptions } from "tsparticles-engine";
import { randomUntil, randomValue } from "../util";
import { getEmojiContainer } from "./particles/Emoji"
import { isMobile } from "../util";

function spawnParticles(emojis: any) {

    const container = getEmojiContainer();      const particles = container?.particles

    const width = window.innerWidth;    const size = 16

    const num = 10;     particles?.clear()

    let i = 0;  while ( i <= num ) {

        let x = Math.floor( Math.random() * width )
        x = Math.max( size, x );        x = Math.min( x, width - size )

        const options: IParticlesOptions = {
            shape: { type: 'char',  character: [ { value: randomValue(emojis) } ] }
        }

        if ( randomUntil(1) == 0 ) options.rotate = [90]

        setTimeout( () => {
            particles?.addParticle( { x: x,   y: window.innerHeight }, options )
        }, i * 100 )
        
        i++

    }
    

}

export default function HoverText(element: any) {

    const { className, text, emojis } = element

    return (
        <p 
            className={ className + ' transition-colors hover:text-cyan-400 active:text-cyan-400' }
            onMouseEnter={ () => { if ( isMobile() ) return; spawnParticles(emojis) } }
            onTouchStart={ () => spawnParticles(emojis) }
        >{text}</p>
    )

}