
"use client"

import { useTranslations } from "next-intl"

type Props = { translationKey: string;      values?: any }

export default function Translation( { translationKey, values }: Props ) {

    const t = useTranslations();            return t.rich( translationKey, values )

}