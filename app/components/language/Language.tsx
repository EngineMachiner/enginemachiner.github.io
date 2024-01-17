
import { Dispatch, SetStateAction } from "react";
import LanguageButton from './Button';
import { Metadata } from 'next';

export type LanguageState = [ LanguageInterface, Dispatch< SetStateAction<LanguageInterface> > ]

export interface LanguageData { [ key: string ]: any }

export interface LanguageInterface { name?: string;   data?: LanguageData }

export interface LanguageProps { 
    metadata: Metadata;     languageState: LanguageState;     languagesData: LanguageData
}

export default function Language( props: LanguageProps ) {

    const { metadata, languageState, languagesData } = props

    return <LanguageButton metadata={metadata} languageState={languageState} languagesData={languagesData}/>

}