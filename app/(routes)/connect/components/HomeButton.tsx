
import Link from "next/link";
import Image from "next/image";

export default function HomeButton() {

    const Home = <Image src="home.png" alt="Home Link" fill priority/>

    const Element = <div className="relative h-3/4 w-3/4">{Home}</div>

    const className = "button !size-[10vh] absolute grid place-items-center top-[3vh] left-[3vh]"

    return <Link className={className} href="/">{Element}</Link>

}