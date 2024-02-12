
'use client'

import { motion } from "framer-motion";
import styles from "../../LinkPage.module.css"
import { useLanguageData } from "../LanguageLoader";

interface Props { shouldAnimate: boolean }

export default function CopyAlert( { shouldAnimate }: Props ) {

    let pos = [ '-60px', '30px' ];

    const language = useLanguageData();     let animate = { y: [ pos[0] ] }

    const transition = { duration: 1.5,     times: [ 0, 0.25, 0.75, 1 ] }

    if (shouldAnimate) animate = { y: [ pos[0], pos[1], pos[1], pos[0] ] }

    return ( <motion.div className="absolute main flex justify-center" initial={{ y: pos[0] }} animate={animate} transition={transition}>
        
        <p className={ styles.copyAlert + " button" }>{ language.copyAlert }</p>
    
    </motion.div> )

}