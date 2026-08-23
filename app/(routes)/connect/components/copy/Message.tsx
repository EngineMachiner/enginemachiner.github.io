
"use client"

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { infoFont } from "@/app/util";
import { useCopyCount } from "./Context";

export default function Message() {

    const message = useTranslations()("copyMessage")

    const [count] = useCopyCount();             if ( count < 1 ) return null


    const y = [ "-4rem", "2rem" ];            const animate = { y: [ y[0], y[1], y[1], y[0] ] }

    const transition = { duration: 1.5,     times: [ 0, 0.25, 0.75, 1 ] }


    let className = infoFont.className + " copy-toast fixed bg-green-400 text-green-800 font-bold"

    let Element = ( 
        <motion.div 
            className={className}
            key={count}
            initial={{ y: y[0] }}
            animate={animate}
            transition={transition}
            role="status"
            aria-live="polite"
        >
            {message}
        </motion.div>
    )


    className = "flex justify-center w-screen";         return <div className={className}>{Element}</div>

}