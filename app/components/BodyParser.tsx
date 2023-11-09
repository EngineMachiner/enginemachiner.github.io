
import { langData } from "../lang"
import HoverText from "./HoverText"

function get( className: string, p: string ) {

    const elements = [];        let s = ""

    const keywords = langData.keywords;     let split = p.split(" ")

    for ( const i in split ) {

        s += split[i] + ' '

        for ( const key2 in keywords ) {
    
            if ( s.indexOf(key2) != -1 ) {

                let sub = s.substring( 0, s.indexOf(key2) )

                elements.push( <p className={className}>{sub}</p> )

                elements.push( <HoverText className={ className + " text-orange-500" } text={key2}/> )

                sub = s.substring( s.indexOf(key2), s.length ).replace( key2, '' )

                elements.push( <p className={className}>{sub}</p> )

                s = "";     break

            }
    
        }

    }

    return elements

}

// Parse keywords that on hover pop emoji particles.

export default function BodyParser( element:{ className: string, body: string[] } ) {

    const { className, body } = element;        const elements = []

    for ( const key1 in body ) {

        let p = body[key1];     elements.push( get( className, p ) )

    }

    return elements
    
}