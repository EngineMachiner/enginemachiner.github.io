
import { join } from "path";

import Link from "next/link";
import Image from "next/image";

import CopyImage from "./copy/Image";

type Props = { src: string; copy?: string; href?: string }

export default function Contact( props: Props ) {

    const { copy, href } = props;           let {src} = props
    
    src = join( "connect/", src );          if (copy) return <CopyImage src={src} copy={copy}/>

    if (href) return <Link className="contact" href={href}><Image src={src} alt={src} fill priority/></Link>

    return null

}