
import Image from "next/image";         import Link from "next/link";

export default function ConnectButton() {

    const image = <Image src="/emojis/link.png" alt="Connect Link" fill priority/>

    const div = <div className="relative h-3/4 w-3/4">{image}</div>

    const className = "button absolute grid place-items-center top-[1vh] right-[calc(5vh*1.5)]"

    return <Link className={className} href="/connect">{div}</Link>

}