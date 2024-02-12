
import HoverText from "../HoverText"
import { LanguageData, LanguageInterface } from "../language/Language";
import { EmojiInterface } from "../particles/Emoji";
import styles from './BodyParser.module.css'

let keywords: LanguageData;     let emojis: EmojiInterface

function getKeywordEmojis(key: string) {

    const value = keywords[key];        const path = '/emojis/' + value

    if ( value.endsWith(".png") ) return [path]; else {

        const data = emojis[value];     const parsed: string[] = []

        for ( const i in data ) parsed[i] = path + '/' + data[i]

        return parsed

    }

}

function getChild( className: string, sentence: string ) {

    const children = [];        let words = sentence.split(" ")

    let i = 0;      const last = words[ words.length - 1 ]

    for ( const word of words ) {

        const isLast = word == last

        const text = word;     let isKeyword = false

        const space = <p className={className} key={ i++ }> </p>

        for ( const key in keywords ) {
    
            const isLong = ( ' ' + key ).includes( ' ' + word )

            isKeyword = text.includes(key) || isLong
            
            if ( !isKeyword ) continue

            const emojis = getKeywordEmojis(key)

            const child = <HoverText className={ className + " text-lime-400" } text={text} emojis={emojis} key={ i++ }/>

            children.push(child);   children.push(space)
            
            isKeyword = true; break
    
        }

        if ( !isKeyword ) children.push( <p className={className} key={ i++ }>{ text + ' ' }</p> )

        if (isLast) children.push( <p key={ i++ } className={ styles.break }/> )

    }

    return children

}

// Parse keywords that on hover pop emoji particles.

interface Props { 
    className: string;      body: string[];
    language: LanguageInterface;     emojis: EmojiInterface
}

export default function BodyParser( props: Props ) {

    const children = []
    
    const { className, body, language, emojis: paths } = props

    keywords = language.data?.keywords;     emojis = paths

    for ( const sentence of body ) children.push( getChild( className, sentence ) )

    return children
    
}