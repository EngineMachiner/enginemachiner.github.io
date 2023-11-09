import { langData } from "@/app/lang"
import Image from "next/image"
import { promises as fs } from 'fs'
import BodyParser from "@/app/components/BodyParser"

async function getArt() {

    // 3 files.
    const index = Math.floor( Math.random() * 2 ) + 1
    const path = process.cwd() + '/data/' + 'asciiArt/' + index + '.txt'
    const file = await fs.readFile( path, 'utf8' )

    return file

}

export default async function About() {

    const title1 = langData.title1;     const body = []

    for ( let i = 0; i < 7; i++ ) body[i] = langData[ 'body' + ( i + 1 ) ]

    return (

        <div className='main'>

            <div className='-z-10 absolute imageContainer'>

                <div className='relative top-1/2 h-1/2 bg-gradient-to-b from-transparent to-blue-600'/>
                
                <Image className='-z-10 backgroundImage' src='/background.gif' alt='Background GIF' fill unoptimized/>

            </div>

            <div className='bodyContainer'>

                <div className='w-full h-full -z-10 quadBackground'/>

                <div className='asciiArtBox'/>

                <div className='text-center'>
                    <pre className='asciiArt'>{ await getArt() }</pre>
                </div>

                <div className='h-full'>
                    
                    <div className='h-full textBox'>

                        <h1 className='text-center'>{title1}</h1>
                        <BodyParser className='inline aboutText' body={body}/>
                    
                    </div>

                </div>

            </div>
            
        </div>

    )

}