
import { langData } from "../lang"
import HoverText from "./HoverText"

function push( elements: any[], element: JSX.Element ) {

    const { props: { children } } = element;        if ( children.length == 0 ) return

    elements.push(element)

}

function get( className: string, line: string ) {

    const elements = [];        const keywords = langData.keywords;
    
    let split = line.split(" ")

    for ( const i in split ) {

        const isLast = i == ( split.length - 1 ).toString()

        const s = split[i] + ' ';     let isKeyword = false

        for ( const key2 in keywords ) {
    
            isKeyword = false;      const emojis = langData.keywords[key2]

            if ( s.indexOf(key2) == -1 ) continue;

            elements.push( <HoverText className={ className + " text-lime-400" } text={s} emojis={emojis}/> )

            isKeyword = true;   break
    
        }

        if ( !isKeyword ) push( elements, <p className={className}>{s}</p> )

        if (isLast) elements.push( <br className="break"/> )

    }

    return elements

}

// Parse keywords that on hover pop emoji particles.

export default function BodyParser( element:{ className: string, body: string[] } ) {

    const { className, body } = element;        const elements = []

    for ( const key1 in body ) {

        let line = body[key1];     elements.push( get( className, line ) )

    }

    return elements
    
}