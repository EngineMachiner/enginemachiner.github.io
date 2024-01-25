import Image from "next/image";
import { LanguageInterface } from "./language/Language";
import { infoFont } from "../utils";

interface Props { language: LanguageInterface }

export default function Background( { language }: Props ) {

    const data = language.data;     const credits = data?.bgCredits || ''

    const creditsClassName = "bgCredits " + infoFont.className

    const link = "https://www.patreon.com/posts/20170210-gif-8052202"

    const linkClassName = creditsClassName + " hover:text-green-400 active:text-green-400"

    return (

        <div>

            <div className="-z-10 absolute imageContainer">

                <div className='relative top-1/2 h-1/2 bg-gradient-to-b from-transparent to-blue-600'/>

                <Image className='-z-10 backgroundImage' src='/background.gif' alt='Background GIF' fill unoptimized/>

            </div>

            <div className="main absolute">
                <div className="bgCreditsBox">
                    <h2 className={creditsClassName}>{credits}</h2>
                    <a className={linkClassName} href={link}>1041uuu</a>
                </div>
            </div>

        </div>
        
    )

}