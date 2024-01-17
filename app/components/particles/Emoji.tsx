'use client'

import Particles from "@tsparticles/react";
import { Container, ISourceOptions } from "@tsparticles/engine";

export interface EmojiInterface { [ key: string ]: string[] }

const emojiOptions: ISourceOptions = {

    particles: {

        move: {
            direction: "top",
            enable: true,   speed: 7,
            straight: true,
            outModes: "destroy"
        },

    }

}

let emojiContainer: Container | undefined

export function getEmojiContainer() { return emojiContainer }

export default function EmojiParticles() {

    const particlesLoaded = async ( container?: Container ) => { emojiContainer = container }

    return <Particles id="emojiParticles" particlesLoaded={particlesLoaded} options={emojiOptions}/>

}