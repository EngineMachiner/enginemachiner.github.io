
// https://www.patreon.com/posts/20170210-gif-8052202

import About from "@/pages/about/about";
import ParticlesInitializer from './components/particles/Engine';

import Background from "./components/Background";
import { asciiArt, emojiImages, languagesData, readData } from "./dataReading";
import { metadata } from "./layout";

export default async function Home() {

    await readData()

    return ( <>
        <Background/><ParticlesInitializer/>
        <About metadata={metadata} ascii={asciiArt} emojiImages={emojiImages} languagesData={languagesData}/>
    </> )


}
