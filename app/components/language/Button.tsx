'use client'

import { useEffect, useState } from 'react';
import { LanguageProps } from './Language';

export default function LanguageButton( props: LanguageProps ) {
    
    const { metadata, languageState, languagesData } = props

    const [ language, setLanguage ] = languageState

    const data = languagesData
    
    let [ i, setIndex ] = useState(0);      let [ title, setTitle ] = useState("")

    function updateTitles() {

        if ( language.name == undefined || data == undefined ) return


        const nextTitle = language.name.replace(".json", "").toUpperCase()

        setTitle(nextTitle)


        metadata.title = data.metatitle


    }

    useEffect( updateTitles, [ language, metadata, data ] )

    function updateLanguage( nextLang: string, nextIndex?: number ) {

        for ( const key in data ) {

            if ( !key.startsWith(nextLang) ) continue

            setLanguage( { name: key,   data: data[key] } )
            
            if ( nextIndex != undefined ) { setIndex(nextIndex); break }

            const i = Object.keys(data).findIndex( (v) => { return v == key } )

            setIndex(i);    break
    
        }

    }

    function setNavigatorLanguage() {

        if ( language.data != undefined || data == undefined ) return

        let browserLanguage = navigator.language.substring(0, 2)

        updateLanguage(browserLanguage)

    }

    useEffect( setNavigatorLanguage )

    function setNextLanguage() {

        const files = Object.keys(data);    const languagesNum = files.length

        i = ( i + 1 ) % languagesNum;       const next = files[i]

        updateLanguage( next, i )

    }

    return <button className="langButton" onClick={setNextLanguage}>{title}</button>

}