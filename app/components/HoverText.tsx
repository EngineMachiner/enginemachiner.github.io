
'use client'

import { ISourceOptions } from "@tsparticles/engine";
import { isPortrait, randomValue } from "../utils";
import { getEmojiContainer } from "./particles/Emoji"
import { isMobile } from "../utils";
import { useWindowSize, WindowSize } from "../clientUtils";

function getX( width: number, size: number ) {
    
    const margin = 25

    let x = Math.floor( Math.random() * width )

    x = Math.max( size + margin, x )

    return Math.min( x, width - size - margin )

}

const timeouts: NodeJS.Timeout[] = []

function clearTimeouts() {

    timeouts.forEach( (timeout) => clearTimeout(timeout) )

    timeouts.length = 0

}

function spawnParticles( emojis: any,    dim: WindowSize ) {

    const container = getEmojiContainer()
    
    const particles = container?.particles
    
    const { width, height } = dim

    let num = 10;       if ( width < height ) num = 5

    particles?.clear();       clearTimeouts()

    // TODO: Add particle with a static angle.

    let i = 0;  while ( i <= num ) {

        let size = Math.random() * 25 + 20;       let time = i * size * 4
        
        if ( width < height ) time *= 2

        if ( !isPortrait() ) size *= width / 1920

        const pos = { x: getX( width, size ), y: height + size }

        const options: ISourceOptions = {
            size: { value: size },
            shape: { type: 'image', options: { image: { src: randomValue(emojis) } } }
        }

        const id = setTimeout( () => { particles?.addParticle( pos, options ) }, time )

        timeouts.push(id);      i++

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

    const component = <p className={ className + ' transition-colors hover:text-cyan-400 active:text-cyan-400' }
    onTouchStart={ () => spawnParticles( emojis, windowSize ) }
    onMouseEnter={onMouseEnter}>
        {text}
    </p>

    return component

}