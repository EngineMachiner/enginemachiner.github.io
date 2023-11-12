'use client'

import { randomUntil, randomValue } from "../util";
import { emojiOptions, getEmojiContainer } from "./particles/Emoji"

function onMouseEnter(emojis: any) {

    const container = getEmojiContainer()

    const width = window.innerWidth;    const size = 16

    const num = 10
    let i = 0;  while ( i <= num ) {

        let x = Math.floor( Math.random() * width )
        x = Math.max( size, x );        x = Math.min( x, width - size )

        const options = {
            rotate: {},
            shape: { type: 'char',  character: [ { value: randomValue(emojis) } ] }
        }

        //if ( randomUntil(1) == 0 ) options.rotate = {  }

        setTimeout( () => {
            container?.particles.addParticle( { x: x,   y: window.innerHeight }, options )
        }, i * 100 )
        
        i++

    }
    

}

export default function HoverText( element: any ) {

    const { className, text, emojis } = element

    return (
        <p 
            className={ className + ' transition-colors hover:text-cyan-400' }
            onMouseEnter={ () => onMouseEnter(emojis) }
        >{text}</p>
    )

}