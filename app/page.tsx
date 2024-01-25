
import About from "@/pages/about/about";
import ParticlesInitializer from './components/particles/Engine';

import { asciiArt, emojiImages, languagesData, readData } from "./dataReading";
import { metadata } from "./layout";

export default async function Home() {

    await readData()

    return ( <>
        <ParticlesInitializer/>
        <About metadata={metadata} ascii={asciiArt} emojiImages={emojiImages} languagesData={languagesData}/>
    </> )


}
