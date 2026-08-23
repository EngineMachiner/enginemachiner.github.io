
import Image from "next/image";         import Link from "next/link";

export default function ConnectButton() {

    const Connect = <Image src="/emojis/link.png" alt="Connect Link" fill loading="eager"/>

    const Element = <div className="relative">{Connect}</div>

    const className = "button absolute top-[clamp(0.5rem,1vh,1rem)] right-[clamp(4.5rem,5vw,5rem)]"

    return <Link className={className} href="/connect">{Element}</Link>

}