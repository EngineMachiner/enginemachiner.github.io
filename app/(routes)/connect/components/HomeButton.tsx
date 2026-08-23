
import Link from "next/link";
import Image from "next/image";

export default function HomeButton() {

    const Home = <Image src="/home.png" alt="Home Link" fill loading="eager"/>

    const Element = <div className="relative">{Home}</div>

    const className = "button absolute top-[clamp(0.5rem,1vh,1.5rem)] left-[clamp(0.5rem,1vw,2rem)]"

    return <Link className={className} href="/">{Element}</Link>

}