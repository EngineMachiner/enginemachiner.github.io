
import { Dispatch, SetStateAction } from "react";
import LanguageButton from './Button';

export type LanguageState = [ LanguageInterface, Dispatch< SetStateAction<LanguageInterface> > ]

export interface LanguageData { [ key: string ]: any }

export interface LanguageInterface { name?: string;   data?: LanguageData }

export interface LanguageProps { 
    languageState: LanguageState;     languagesData: LanguageData
}

export default function Language( { languageState, languagesData }: LanguageProps ) {

    return <LanguageButton languageState={languageState} languagesData={languagesData}/>

}