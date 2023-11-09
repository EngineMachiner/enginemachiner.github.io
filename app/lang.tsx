
import { promises as fs } from 'fs'

let currentLanguage = 'en'

interface lang { [ key: string ]: any }

export let langData: lang = {}

export async function setLanguageData() {

    const langDir = '/data/lang/'
    const path = process.cwd() + langDir + currentLanguage + '.json'
    const file = await fs.readFile( path, 'utf8' )

    langData = JSON.parse(file)

}