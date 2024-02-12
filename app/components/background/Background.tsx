
import Image from "next/image";
import { LanguageInterface } from "../language/Language";
import { infoFont } from "../../utils";
import styles from "./Background.module.css"
import Link from "next/link";

interface Props { language?: LanguageInterface;     blur?: boolean }

export default function Background( { language, blur }: Props ) {

    const data = ( language || {} ).data;     const credits = data?.bgCredits || ''

    const url = "https://www.patreon.com/posts/20170210-gif-8052202"

    const creditsClass = styles.bgCredits + " " + infoFont.className

    const linkClass = creditsClass + " text-cyan-400 hover:text-green-400 active:text-green-400"

    let imageClass = '-z-10 object-cover';      if (blur) imageClass += ' blur'

    function Credits() {

        if ( credits == '' ) return <></>

        return ( <div className="main absolute">

            <div className={ styles.bgCreditsBox }>
                <h2 className={creditsClass}>{credits}</h2>
                <Link className={linkClass} href={url}>1041uuu</Link>
            </div>

        </div> )
    
    }

    return ( <>

        <div className={ styles.box + " main absolute -z-10 bg-black" }>

            <div className='relative top-1/2 h-1/2 bg-gradient-to-b from-transparent to-blue-600'/>

            <Image className={imageClass} src='/background.gif' alt='Background GIF' fill unoptimized/>

        </div>

        <Credits/>

    </> )

}