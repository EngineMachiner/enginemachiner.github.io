
'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";

const buttonStyle: CSSProperties = { backgroundColor: "#CBD5D7",    margin: '16px' }

export default function HomeButton() {

    const href = { pathname: '/', query: { loadingScreen: false } }

    return ( <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ delay: 0.25 }} className="absolute">

        <Link className="button center cursor-pointer z-10" href={href} style={buttonStyle}>

            <div className="relative h-3/4 w-3/4">
                <Image src="/home.png" alt="home icon" fill priority sizes="200px 200px"/>
            </div>

        </Link>

    </motion.div> )

}