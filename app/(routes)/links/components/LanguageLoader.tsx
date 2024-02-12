
'use client'

import { useSearchParams } from "next/navigation"
import { LanguageData } from "@/app/components/language/Language";

export let languagesData: LanguageData

function setData( data: LanguageData ) { languagesData = data }

interface Props { languagesData: LanguageData }

export default function LanguageLoader( { languagesData }: Props ) {

    setData(languagesData);    return <></>

}

export function useLanguageData() {

    const query = useSearchParams()

    const language = query.get('language')

    if ( language == null ) return languagesData['en.json']

    return languagesData[language]

}