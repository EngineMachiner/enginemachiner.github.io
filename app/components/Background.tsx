import Image from "next/image";

export default function Background() {

    return (

        <div className='-z-10 absolute imageContainer'>

            <div className='relative top-1/2 h-1/2 bg-gradient-to-b from-transparent to-blue-600'/>
        
            <Image className='-z-10 backgroundImage' src='/background.gif' alt='Background GIF' fill unoptimized/>

        </div>
    )

}