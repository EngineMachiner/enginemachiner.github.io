
import React from "react"
import font from "next/font/local"

export const titleFont = font( { src: "../fonts/LoftygoalsRegular.otf", preload: false } )
export const bodyFont = font( { src: "../fonts/NotoSerif-Regular.ttf", preload: false } )
export const infoFont = font( { src: "../fonts/JetBrainsMono-Medium.ttf", preload: false } )

/*

function randomInt( min: number, max: number ) {
    
    min = Math.ceil(min);           max = Math.floor(max);          const x = Math.random() * ( max - min + 1 )

    return Math.floor(x) + min

}

*/

function randomUntil( x: number ) { x = Math.random() * x;       return Math.floor(x) }

function randomIndex( a: any[] ) { const i = a.length;      return randomUntil(i) }

function randomValue( a: any[] ) { const i = randomIndex(a);        return a[i] }


export type ChildrenProps = { children?: React.ReactNode }

export async function messages( locale: string ) {

    const messages = await import(`../messages/${locale}.json`);          return messages.default

}

export function sanitizePath( path: string ) { return path.replace( "public/", "" ) }


type Tree = Record<string, any>

export function randomInTree( tree: Tree, sanitize: boolean = true ): any {

    let children = tree.children!;            const child = randomValue(children)
    
    children = child.children;          let path = child.path;          if (sanitize) path = sanitizePath(path)

    return children ? randomInTree(children) : path

}