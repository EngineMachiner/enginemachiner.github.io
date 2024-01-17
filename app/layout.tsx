import { Metadata } from 'next';
import './globals.css';     import { Inter } from 'next/font/google'

const inter = Inter( { subsets: ['latin'] } )

export const metadata: Metadata = { description: 'Engine_Machiner\'s website.' }

export default async function RootLayout( { children }: { children: React.ReactNode } ) {

    return ( <html lang="en">
        <body className={ inter.className }>{children}</body>
    </html> )
    
}
