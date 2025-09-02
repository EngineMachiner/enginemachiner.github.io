
"use client"

import { PropsWithChildren } from "react";
import { motion, Transition } from "framer-motion";

export default function TitleMotion( { children }: PropsWithChildren ) {

    const initial = { opacity: 0,       y: -50 }

    const transition: Transition = { delay: 0.3,        duration: 0.6 }

    const animate = { opacity: 1,       y: 0,       transition: transition }

    return <motion.div initial={initial} animate={animate}>{children}</motion.div>

}