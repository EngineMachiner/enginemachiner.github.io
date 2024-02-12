
import Image from "next/image";
import Link from "next/link";
import styles from "./LinksRoute.module.css"

interface Props { languageName: string | undefined }

export default function LinksRoute( { languageName }: Props ) {

    const linkClass = styles.linksButton + " button center cursor-pointer"

    const href = { pathname: '/links', query: { language: languageName } }

    return ( <Link className={linkClass} href={href}>

        <div className="relative h-3/4 w-3/4">
            <Image src="/emojis/link.png" alt="link emoji" fill priority sizes="256px 256px"/>
        </div>

    </Link> )

}