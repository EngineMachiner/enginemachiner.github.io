
"use client"

import { Directory, randomPath } from "@/app/util";
import { useEffect, useState } from "react";

type Props = { paths: Directory }

export default function Art( { paths }: Props ) {

    const [art, setArt] = useState("")

    useEffect( () => {

        const path = randomPath( paths, true )

        fetch( "/" + path ).then( response => {

            if ( !response.ok ) throw new Error(`Failed to load art: ${response.status}`)
            
            return response.text()
            
        } )
        .then(setArt)
        .catch( error => console.error("Could not load art:", error) )

    }, [paths] )

    const className = "art-panel text-green-500 text-right"

    return <div className="relative bg-black/75"><pre className={className}>{art}</pre></div>

}