
"use client"

import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { Container } from "@tsparticles/engine"
import { initParticlesEngine } from "@tsparticles/react"

export let particlesLoaded: ( container?: Container ) => Promise<void>

export let particlesContainer: Container | undefined

export default function ParticlesInitializer() {

    initParticlesEngine( async engine => await loadSlim(engine) )

    particlesLoaded = async ( container?: Container ) => { particlesContainer = container }

    return null

}

const options = { fullScreen: { enable: false } }

export function ParticlesLoader() {

    const className = "absolute inset-0 z-20 pointer-events-none"

    return <Particles className={className} particlesLoaded={particlesLoaded} options={options}/>

}