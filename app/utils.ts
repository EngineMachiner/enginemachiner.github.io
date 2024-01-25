
import localFont from "next/font/local"

export const isMobile = () => {
    return window.matchMedia( "(hover: none) and (pointer: coarse)" ).matches
}

export const isPortrait = () => {
    return window.matchMedia( "(orientation: portrait)" ).matches
}

export const titleFont = localFont( { src: '../fonts/LoftygoalsRegular-9Y5Xy.otf' } )
export const bodyFont = localFont( { src: '../fonts/NotoSerif-Regular.ttf' } )
export const infoFont = localFont( { src: '../fonts/JetBrainsMono-Medium.ttf' } )

export function randomUntil( n2: number ) { return Math.floor( Math.random() * n2 ) }

function randomIndex( array: any[] ) { return randomUntil( array.length ) }

export function randomInRange( n1: number, n2: number ) { return Math.min( n1, randomUntil(n2) ) }

export function randomValue( array: any[] ) { return array[ randomIndex(array) ] }