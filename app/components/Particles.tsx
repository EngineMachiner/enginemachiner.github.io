
"use client"

import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { Container } from "@tsparticles/engine"
import { initParticlesEngine } from "@tsparticles/react"

export let particlesContainer: Container | undefined

export const particlesLoaded = async ( container?: Container ) => { particlesContainer = container }

const options = { fullScreen: { enable: false } }

export function ParticlesLoader() {

    const className = "absolute inset-0 z-20 pointer-events-none"

    return <Particles className={className} particlesLoaded={particlesLoaded} options={options}/>

}

export function ParticlesInitializer() {

    initParticlesEngine( async engine => await loadSlim(engine) )

    return null

}