
'use client'

import { loadFull } from 'tsparticles';
import { initParticlesEngine } from '@tsparticles/react';
import { useCallback } from 'react';

export default function ParticlesInitializer() {

    useCallback( () => {
        initParticlesEngine( async (engine) => { await loadFull(engine) } )
    }, [] )()

    return <></>

}