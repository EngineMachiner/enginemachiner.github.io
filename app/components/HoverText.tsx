'use client'

function onMouseEnter() {
    console.log("A")
}

function onMouseLeave() {
    console.log("B")
}

export default function HoverText( element: { className: string, text: string } ) {

    const { className, text } = element

    return ( 
        <p 
            className={className}
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
        >{text}</p> 
    )

}