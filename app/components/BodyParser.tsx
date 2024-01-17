
import HoverText from "./HoverText"
import { LanguageData, LanguageInterface } from "./language/Language";
import { EmojiInterface } from "./particles/Emoji";

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

    const children = [];    let words = sentence.split(" ")
    
    let i = 0;    const last = words[ words.length - 1 ]

    for ( const word of words ) {

        const isLast = word == last

        const text = word + ' ';     let isKeyword = false

        for ( const key in keywords ) {
    
            isKeyword = text.includes(key);   if ( !isKeyword ) continue

            const emojis = getKeywordEmojis(key)

            const child = <HoverText className={ className + " text-lime-400" } text={text} emojis={emojis} key={ i++ }/>

            children.push(child);   isKeyword = true;   break
    
        }

        if ( !isKeyword ) children.push( <p className={className} key={ i++ }>{text}</p> )

        if (isLast) children.push( <p className="break" key={ i++ }/> )

    }

    return children

}

// Parse keywords that on hover pop emoji particles.

interface Props { 
    className: string;      body: string[];
    language: LanguageInterface;     emojiImages: EmojiInterface
}

export default function BodyParser( props: Props ) {

    const children = []
    
    const { className, body, language, emojiImages } = props

    keywords = language.data?.keywords;     emojis = emojiImages

    for ( const sentence of body ) children.push( getChild( className, sentence ) )

    return children
    
}