
import Image from "next/image";         import Link from "next/link";

export default function ConnectButton() {

    const Connect = <Image src="/emojis/link.png" alt="Connect Link" fill priority/>

    const Element = <div className="relative h-3/4 w-3/4">{Connect}</div>

    const className = "button absolute grid place-items-center top-[1vh] right-[calc(5vh*1.5)]"

    return <Link className={className} href="/connect">{Element}</Link>

}