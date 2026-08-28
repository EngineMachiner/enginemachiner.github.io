
"use client"

import defaultMessages from "@/messages/en.json"

import { getCookie, setCookie } from "cookies-next/client";
import { useEffect, useState, PropsWithChildren } from "react";
import { NextIntlClientProvider as IntlProvider } from "next-intl";

import { messages as importMessages } from "@/app/util";
import { COOKIE_LOCALE_KEY, DEFAULT_LOCALE, LOCALES } from "@/i18n";

import LanguageSwitcher from "./Switcher";

function cookie() { return getCookie( COOKIE_LOCALE_KEY ) }

function browserLanguage() {

    const language = navigator.language.split('-')[0]

    return LOCALES.includes(language) ? language : DEFAULT_LOCALE

}

const YEAR_IN_SECONDS = 60 * 60 * 24 * 365

function setLocaleCookie( locale: string ) {

    const includes = LOCALES.includes(locale);          if ( !includes ) return

    setCookie( COOKIE_LOCALE_KEY, locale, { maxAge: YEAR_IN_SECONDS } )

}

export default function LanguageSetup( { children }: PropsWithChildren ) {

    const [ locale, setLocale ] = useState( DEFAULT_LOCALE )
    const [ messages, setMessages ] = useState(defaultMessages)


    function setInitialLocale() {

        let locale = cookie() || browserLanguage()

        locale = LOCALES.includes(locale) ? locale : DEFAULT_LOCALE

        setLocale( locale )

    }

    // The extra render is tiny and happens only during initial language detection.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect(setInitialLocale)


    useEffect( () => {

        setLocaleCookie(locale);        let cancelled = false

        importMessages(locale).then( messages => { if ( !cancelled ) setMessages(messages) } )

        return () => { cancelled = true }

    }, [locale] )

    useEffect( () => { document.documentElement.lang = locale }, [locale] )

    useEffect( () => { document.title = messages.metatitle }, [messages] )


    children = <><LanguageSwitcher setLocale={setLocale}/>{children}</>

    return <IntlProvider locale={locale} messages={messages}>{children}</IntlProvider>

}