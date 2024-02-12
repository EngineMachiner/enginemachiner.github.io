
'use client'

import { isPortrait } from "@/app/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from './Loading.module.css'
import { useSearchParams } from "next/navigation";

function Components( icon: string ) {

    let [ y, setY ] = useState('0')

    useEffect( () => {

        function move() {

            let y = '100%';    if ( isPortrait() ) y = '400vh'

            setY( '-' + y )

        }

        const loaded = document.readyState == 'complete'

        if (loaded) move(); else {

            window.addEventListener( 'load', move, false )

            return () => { window.removeEventListener( 'load', move ) }
            
        }

    } )

    if ( icon == '' ) return <></>

    return ( <motion.div className="main absolute z-20" animate={{ y: y }} transition={{ delay: 1, duration: 3 }}>
    
        <div className='main bg-gradient-to-b from-indigo-500 to-red-500'>

            <div className={ styles.main + " center relative" }>

                <div className={ styles.icon + " relative" }>
                    <Image src={icon} alt='Loading GIF' fill priority sizes="10vw 10vw"/>
                </div>

            </div>

        </div>
    
    </motion.div> )

}

interface Props { children: React.ReactNode;      icon: string }

export default function Loading( { children, icon }: Props ) {

    const query = useSearchParams()

    // Shallow queries haven't been fully implemented on nextjs or something 😞

    if ( query.has('loadingScreen') ) return <>{children}</>

    return <>{ Components(icon) }{children}</>

}