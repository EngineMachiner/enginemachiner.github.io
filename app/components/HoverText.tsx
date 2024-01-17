'use client'

import { ISourceOptions } from "@tsparticles/engine";
import { randomUntil, randomValue } from "../utils";
import { getEmojiContainer } from "./particles/Emoji"
import { isMobile } from "../utils";
import { useWindowSize, windowSize } from "../clientUtils";

function getX( width: number, size: number ) {
    
    const margin = 25

    let x = Math.floor( Math.random() * width )

    x = Math.max( size + margin, x )

    return Math.min( x, width - size - margin )

}

function spawnParticles( emojis: any,    dim: windowSize ) {

    const container = getEmojiContainer();      const particles = container?.particles

    const width = dim.width;    const num = 10;     particles?.clear()

    let i = 0;  while ( i <= num ) {

        const size = Math.random() * 25 + 20;       const time = i * size * 4

        const pos = { x: getX( width, size ), y: dim.height + size }

        const options: ISourceOptions = {
            size: { value: size },
            shape: { type: 'image', options: { image: { src: randomValue(emojis) } } }
        }

        if ( randomUntil(1) == 0 ) options.move = { angle: 90 }

        setTimeout( () => { particles?.addParticle( pos, options ) }, time )
        
        i++

    }
    

}

interface Props {
    className: string;      text: string;       emojis: string[]
}

export default function HoverText(props: Props) {

    const windowSize = useWindowSize();     const { className, text, emojis } = props

    function onMouseEnter() {

        if ( isMobile() ) return;       spawnParticles( emojis, windowSize )
    
    }

    return (
        <p 
            className={ className + ' transition-colors hover:text-cyan-400 active:text-cyan-400' }
            onTouchStart={ () => spawnParticles( emojis, windowSize ) }
            onMouseEnter={onMouseEnter}
        >{text}</p>
    )

}