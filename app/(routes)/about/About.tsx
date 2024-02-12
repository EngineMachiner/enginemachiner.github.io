
'use client'

import Background from "@/app/components/background/Background";
import BodyParser from "@/app/components/bodyParser/BodyParser";
import LinksRoute from "@/app/(routes)/about/components/LinksRoute";
import Language, { LanguageState, LanguageData, LanguageInterface } from "@/app/components/language/Language";
import EmojiParticles, { EmojiInterface } from "@/app/components/particles/Emoji";
import { bodyFont, randomValue, titleFont } from "@/app/utils";
import { useState } from "react";
import styles from './About.module.css';

// TODO: Internationalization and using context to get states further.

interface ComponentProps {
    language: LanguageInterface;     ascii: string[];
    emojis: EmojiInterface
}

function Components( { language, ascii, emojis }: ComponentProps ) {

    const data = language.data;     if ( data == undefined ) return

    const title = data.title1;      const body: string[] = []

    const titleClass = titleFont.className + ' text-center'

    const bodyClass = bodyFont.className + ' ' + styles.text + ' inline-block'

    for ( let i = 0; i < 7; i++ ) body[i] = data[ 'body' + ( i + 1 ) ]

    function Body() {

        return ( <div className="main">

            <div className={ styles.main }>

                <div className={ styles.quadBackground }/>

                <div className={ styles.asciiArtBox }/>

                <pre className={ styles.asciiArt }>{ randomValue(ascii) }</pre>

                <div className='h-full'>
                    
                    <div className={ styles.textBox }>

                        <pre className={ styles.asciiArtMobile }>{ randomValue(ascii) }</pre>

                        <h1 className={titleClass}>{title}</h1>

                        <BodyParser className={bodyClass} body={body} language={language} emojis={emojis}/>
                    
                    </div>

                </div>

            </div>

        </div> )

    }

    return ( <>
        <LinksRoute languageName={ language.name }/>
        <Body/><EmojiParticles/>
    </> )

}

interface Props {
    languagesData: LanguageData;     ascii: string[]
    emojis: EmojiInterface
}

export default function About( { languagesData, ascii, emojis }: Props ) {

    const languageState: LanguageState = useState({})

    const [language] = languageState

    return ( <>
        <Background language={language}/>
        <Language languageState={languageState} languagesData={languagesData}/>
        <Components language={language} ascii={ascii} emojis={emojis}/>
    </> )

}