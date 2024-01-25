
'use client'

import Background from "@/app/components/Background";
import BodyParser from "@/app/components/BodyParser";
import Language, { LanguageState, LanguageData, LanguageInterface } from "@/app/components/language/Language";
import EmojiParticles, { EmojiInterface } from "@/app/components/particles/Emoji";
import { bodyFont, randomValue, titleFont } from "@/app/utils";
import { Metadata } from "next";
import { useState } from "react";

interface ComponentProps {
    language: LanguageInterface;     ascii: string[];
    emojiImages: EmojiInterface
}

function Components(props: ComponentProps) {

    const { language, ascii, emojiImages } = props

    const data = language.data;     if ( data == undefined ) return

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

                        <pre className='asciiArtMobile text-center'>{ randomValue(ascii) }</pre>

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

    const languageState: LanguageState = useState({})

    const [language] = languageState

    return ( <>
        <Background language={language}/>
        <Language metadata={metadata} languageState={languageState} languagesData={languagesData}/>
        <Components language={language} ascii={ascii} emojiImages={emojiImages}/>
    </> )

}