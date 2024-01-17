import { promises as fs } from 'fs'
import { LanguageData } from './components/language/Language'
import { EmojiInterface } from './components/particles/Emoji'

type readFunction = ( directory: string, name: string ) => void | Promise<void>

async function readContent( path: string, set: readFunction ) {

    const directory = process.cwd() + path

    for ( const name of await fs.readdir(directory) ) { await set( directory, name ) }

}

export const languagesData: LanguageData = {}

async function readLanguages() {

    async function set( directory: string, name: string ) {

        const data = await fs.readFile( directory + name, 'utf8' )

        languagesData[name] = JSON.parse(data)

    }

    await readContent( '/data/lang/', set )

}

export const asciiArt: string[] = []

async function readArt() {

    async function set( directory: string, name: string ) {

        asciiArt.push( await fs.readFile( directory + name, 'utf8' ) )

    }

    await readContent( '/data/asciiArt/', set )

}

export const emojiImages: EmojiInterface = {}

async function readEmojis() {

    async function set( directory: string, name: string ) {

        if ( name.endsWith('.png') ) return

        emojiImages[name] = await fs.readdir( directory + name )

    }

    await readContent( '/public/emojis/', set )

}

export async function readData() {

    await readLanguages();    await readEmojis();   await readArt()
    
}