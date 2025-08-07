
"use client"

import { useContext } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { infoFont } from "@/app/util";
import { copyContexts } from "./Context";

export default function Message() {

    const message = useTranslations()("copyMessage")


    const [CopyContext] = copyContexts;          const animateState = useContext( CopyContext )

    if ( !animateState ) return <></>


    const y = [ "-8vh", "3vh" ];            const animate = { y: [ y[0], y[1], y[1], y[0] ] }

    const transition = { duration: 1.5,     times: [ 0, 0.25, 0.75, 1 ] }


    let className = infoFont.className + " fixed text-[3vmin] bg-green-400 text-green-800 font-bold rounded-[2vh] p-[1vh]"

    let div = <motion.div className={className} key={animateState} animate={animate} transition={transition}>{message}</motion.div>


    className = "flex justify-center w-screen";         return <div className={className}>{div}</div>

}