
"use client"

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { infoFont } from "@/app/util";
import { useCopyCount } from "./Context";

export default function Message() {

    const message = useTranslations()("copyMessage")

    const [count] = useCopyCount();             if ( count < 1 ) return null


    const y = [ "-8vh", "3vh" ];            const animate = { y: [ y[0], y[1], y[1], y[0] ] }

    const transition = { duration: 1.5,     times: [ 0, 0.25, 0.75, 1 ] }


    let className = infoFont.className + " fixed text-[3vmin] bg-green-400 text-green-800 font-bold rounded-[2vh] p-[1vh]"

    let Element = <motion.div className={className} key={count} animate={animate} transition={transition}>{message}</motion.div>


    className = "flex justify-center w-screen";         return <div className={className}>{Element}</div>

}