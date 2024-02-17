
import { Metadata } from 'next';
import Background from "@/app/components/background/Background";
import ActionBlock from './components/ActionBlock/ActionBlock';
import HomeButton from './components/HomeButton';
import { languagesData, readLanguages } from '@/app/dataReading';
import LanguageLoader from './components/LanguageLoader';
import { Suspense } from 'react';

export const metadata: Metadata = { title: 'Engine\'s - Links' }

export default async function LinksPage() {

    await readLanguages()

    return ( <div className='overflow-hidden absolute w-full h-full'>

        <Suspense><LanguageLoader languagesData={languagesData}/></Suspense>
        <div className="brightness-50"><Background blur/></div>
        <HomeButton/><ActionBlock/>

    </div> )

}