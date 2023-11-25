'use client'

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Container, Engine, IParticlesOptions } from "tsparticles-engine";

const emojiOptions: IParticlesOptions = {

    particles: {

        move: {
            direction: "top",
            enable: true,   speed: 7,
            straight: true,
            outModes: "destroy"
        },

        shape: {
            type: 'char',
            character: [ { value: ['-'] } ]
        },

        size: { value: { min: 15, max: 35 } },

    }

}

let emojiContainer: Container | undefined = undefined

export function getEmojiContainer() { return emojiContainer }

export default function EmojiParticles() {

    const init = useCallback( async ( engine: Engine ) => { await loadFull(engine) }, [] )

    const loaded = useCallback( async ( container: Container | undefined ) => {
        
        emojiContainer = container

    }, [] )

    return <Particles id="emojiParticles" init={init} loaded={loaded} options={emojiOptions}/>

}