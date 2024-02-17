
'use client'

import Image from 'next/image';
import styles from '../../LinkPage.module.css';
import { motion } from "framer-motion";
import CopyAlert from './CopyAlert';
import { Dispatch, SetStateAction, useState } from 'react';
import Link from 'next/link';

let setAnimate: Dispatch< SetStateAction<boolean> >

interface CopyClickData { 
    src: string;    toCopy: string;     priority?: boolean
}

/** Copies to clipboard. Webpage has to be HTTPS. */
function copy( toCopy: string ) {

    setAnimate(true);   navigator.clipboard.writeText(toCopy).then()
    
}

function CopyClickImage( { src, toCopy, priority }: CopyClickData ) {

    return ( <div className={ styles.image + ' relative cursor-pointer' } >
        <Image
            src={ '/icons/' + src } alt={ src + ' image' }
            fill sizes='256px 256px' priority={priority}

            onClick={ () => { copy(toCopy) } }
            onMouseUp={ () => { setAnimate(false) } }
        />
    </div> )

}

interface LinkImageData { 
    src: string;    href: string;   priority?: boolean
}

function LinkImage( { src, href, priority }: LinkImageData ) {

    return ( <Link href={href}>

        <div className={ styles.image + ' relative' }>

            <Image
                src={ '/icons/' + src }     alt={ src + ' image' }
                fill sizes='256px 256px'    priority={priority}
            />

        </div>
        
    </Link> )

}

function ActionIcons() {

    return ( <>
        <CopyClickImage src='discord.png' toCopy='engine_machiner' priority/>
        <CopyClickImage src='mail.png' toCopy='mfpc98@gmail.com' priority/>
        <LinkImage src='steam.png' href='https://steamcommunity.com/id/Engine_Machiner/'/>
        <LinkImage src='youtube.png' href='https://youtube.com/@Engine_Machiner' priority/>
        <LinkImage src='github.png' href='https://github.com/EngineMachiner'/>
    </> )

}

export default function ActionBlock() {

    const [ animate, set ] = useState(false)

    const blockClass = 'main ' + styles.main;       setAnimate = set

    return ( <>

        <CopyAlert shouldAnimate={animate}/>

        <motion.div className={blockClass} initial={{ y: '100vh' }} animate={{ y: 0 }} transition={{ duration: 1 }}>

            <div className={ styles.iconsBg }>{ ActionIcons() }</div>

        </motion.div>

    </> )
    
}