
'use client'

import { CSSProperties, useEffect, useState } from 'react';
import { LanguageProps } from './Language';

const style: CSSProperties = {
    right: '1.5vh',     left: 'auto',       marginTop: '1.3vh'
}

export default function LanguageButton( { languageState, languagesData }: LanguageProps ) {

    const data = languagesData

    const [ language, setLanguage ] = languageState
    
    let [ i, setIndex ] = useState(0);      let [ title, setTitle ] = useState("")

    function updateTitle() {

        const name = language.name

        if ( name == undefined || data == undefined ) return

        const title = name.replace(".json", '').toUpperCase()

        setTitle(title)

    }

    useEffect( updateTitle, [ language, data ] )

    function updateLanguage( langName: string, index?: number ) {

        for ( const key in data ) {

            if ( !key.startsWith(langName) ) continue

            setLanguage( { name: key,   data: data[key] } )
            
            if ( index != undefined ) { setIndex(index); break }

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

        const files = Object.keys(data);    const n = files.length

        i = ( i + 1 ) % n;       const next = files[i]

        updateLanguage( next, i )

    }

    return <button className="button" style={style} onClick={setNextLanguage}>{title}</button>

}