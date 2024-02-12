
import { Metadata } from 'next';
import Background from "@/app/components/background/Background";
import ActionBlock from './components/ActionBlock/ActionBlock';
import HomeButton from './components/HomeButton';
import { languagesData, readLanguages } from '@/app/dataReading';
import LanguageLoader from './components/LanguageLoader';

export const metadata: Metadata = { title: 'Engine\'s - Links' }

export default async function LinksPage() {

    await readLanguages()

    return ( <div className='overflow-hidden absolute w-full h-full'>

        <LanguageLoader languagesData={languagesData}/>
        <div className="brightness-50"><Background blur/></div>
        <HomeButton/><ActionBlock/>

    </div> )

}