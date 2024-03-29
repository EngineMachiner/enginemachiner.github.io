
import { promises as fs } from 'fs'
import { LanguageData } from './components/language/Language'
import { EmojiInterface } from './components/particles/Emoji'

type readFunction = ( directory: string, name: string ) => void | Promise<void>

export async function readContent( path: string, set: readFunction ) {

    const directory = process.cwd() + path

    for ( const name of await fs.readdir(directory) ) { await set( directory, name ) }

}

export const loadingIcons: string[] = []

async function readLoadingIcons() {

    const iconsDirectory = /loading/

    async function set( _: string, name: string ) {

        loadingIcons.push( iconsDirectory + name )

    }

    await readContent( '/public' + iconsDirectory, set )

}

export const languagesData: LanguageData = {}

export async function readLanguages() {

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

export const emojis: EmojiInterface = {}

async function readEmojis() {

    async function set( directory: string, name: string ) {

        if ( name.endsWith('.png') ) return

        emojis[name] = await fs.readdir( directory + name )

    }

    await readContent( '/public/emojis/', set )

}

export async function readData() {

    await readLanguages();    await readEmojis();   await readArt()
    
    await readLoadingIcons()
    
}