
"use client"

import { Dispatch, SetStateAction } from "react";
import { useLocale } from "next-intl";

import { LOCALES } from "@/i18n";

type SetLocale = Dispatch< SetStateAction<string> >;            type Props = { setLocale: SetLocale }

export default function LanguageSwitcher( { setLocale }: Props ) {

    let locale = useLocale();           const title = locale.toUpperCase()

    const onClick = () => {

        let i = LOCALES.indexOf(locale) + 1;            i = i % LOCALES.length

        locale = LOCALES[i];            setLocale( locale )

    }

    const className = "button absolute z-20 top-[1vh] right-[1.5vh] text-green-800"

    return <button className={className} onClick={onClick}>{title}</button>

}