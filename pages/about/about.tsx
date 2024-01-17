
'use client'

import BodyParser from "@/app/components/BodyParser";
import Language, { LanguageState, LanguageData } from "@/app/components/language/Language";
import EmojiParticles, { EmojiInterface } from "@/app/components/particles/Emoji";
import { bodyFont, randomValue, titleFont } from "@/app/utils";
import { Metadata } from "next";
import { useState } from "react";

interface ComponentProps { 
    languageState: LanguageState;     ascii: string[]
    emojiImages: EmojiInterface 
}

function Components(props: ComponentProps) {

    const { languageState, ascii, emojiImages } = props

    const [language] = languageState;       const data = language.data
    
    if ( data == undefined ) return

    const title1 = data.title1;     const body = []

    for ( let i = 0; i < 7; i++ ) body[i] = data[ 'body' + ( i + 1 ) ]

    return (

        <div className='main'>

            <div className='bodyContainer'>

                <div className='w-full h-full -z-10 quadBackground'/>

                <div className='asciiArtBox'/>

                <div className='text-center'>
                    <pre className='asciiArt'>{ randomValue(ascii) }</pre>
                </div>

                <div className='h-full'>
                    
                    <div className='h-full textBox'>

                        {/* <pre className='asciiArtMobile text-center'>{ await getArt() }</pre> */}

                        <h1 className={ titleFont.className + ' text-center' }>{title1}</h1>
                        <BodyParser className={ bodyFont.className + ' inline-block aboutText' } body={body} language={language} emojiImages={emojiImages}/>
                    
                    </div>

                </div>

            </div>
            
            <EmojiParticles/>

        </div>

    )

}

interface Props {
    metadata: Metadata;
    languagesData: LanguageData;     ascii: string[]
    emojiImages: EmojiInterface
}

export default function About(props: Props) {

    const { metadata, languagesData, ascii, emojiImages } = props

    const state: LanguageState = useState({})

    return ( <>
        <Language metadata={metadata} languageState={state} languagesData={languagesData}/>
        <Components languageState={state} ascii={ascii} emojiImages={emojiImages}/>
    </> )

}