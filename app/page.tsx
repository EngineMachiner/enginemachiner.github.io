
import { Metadata } from 'next';
import About from "@/app/(routes)/about/About";
import ParticlesInitializer from './components/particles/Engine';
import { asciiArt, emojis, languagesData, loadingIcons, readData } from "./dataReading";
import Loading from "@/app/components/loading/Loading";
import { randomValue } from "./utils";
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Engine\'s - About',
    description: 'Manuel P / Engine_Machiner\'s website.' ,
    icons: '/icon.png'
}

export function getFormerMetadata() { return metadata }

export default async function Home() {

    await readData()

    return ( <>

        <ParticlesInitializer/>

        <Suspense>
            <Loading icon={ randomValue(loadingIcons) }>
                <About ascii={asciiArt} emojis={emojis} languagesData={languagesData}/>
            </Loading>
        </Suspense>

    </> )

}
