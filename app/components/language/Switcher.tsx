
"use client"

import { Dispatch, SetStateAction } from "react";
import { useLocale } from "next-intl";

import { LOCALES } from "@/i18n";

type SetLocale = Dispatch< SetStateAction<string> >;            type Props = { setLocale: SetLocale }

export default function LanguageSwitcher( { setLocale }: Props ) {

    let locale = useLocale();           const title = locale.toUpperCase()

    const onClick = () => {

        let i = LOCALES.indexOf(locale) + 1;            i = i % LOCALES.length

        const nextLocale = LOCALES[i];            setLocale( nextLocale )

    }

    const className = "button absolute cursor-pointer z-20 top-[clamp(0.5rem,1vh,1rem)] right-[clamp(0.75rem,1vw,2rem)] text-green-800"

    return <button className={className} onClick={onClick}>{title}</button>

}