
import Image from "next/image";
import Link from "next/link";

export default function HomeButton() {

    const image = <Image src="home.png" alt="Home Link" fill priority/>

    const div = <div className="relative h-3/4 w-3/4">{image}</div>

    const className = "button !size-[10vh] absolute grid place-items-center top-[3vh] left-[3vh]"

    return <Link className={className} href="/">{div}</Link>

}