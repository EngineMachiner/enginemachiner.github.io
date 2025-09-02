
"use client"

import { getCookie, setCookie } from "cookies-next/client";
import { useEffect, useState, PropsWithChildren } from "react";
import { NextIntlClientProvider as IntlProvider } from "next-intl";

import { messages as importMessages, Messages } from "@/app/util";
import { COOKIE_LOCALE_KEY, DEFAULT_LOCALE, LOCALES } from "@/i18n";

import LanguageSwitcher from "./Switcher";

function localeCookie() { return getCookie( COOKIE_LOCALE_KEY ) }

function browserLanguage() {

    const language = navigator.language;          return language.split('-')[0]

}

const YEAR_IN_SECONDS = 60 * 60 * 24 * 365

export default function LanguageSetup( { children }: PropsWithChildren ) {

    const [ locale, setLocale ] = useState( DEFAULT_LOCALE )
    
    const [ messages, setMessages ] = useState<Messages>(null)


    function setInitialLocale() {

        const locale = localeCookie() || browserLanguage();           setLocale( locale )

    }

    useEffect( () => setInitialLocale(), [] )


    function setLocaleCookie() {

        const includes = LOCALES.includes(locale);          if ( !includes ) return

        setCookie( COOKIE_LOCALE_KEY, locale, { maxAge: YEAR_IN_SECONDS } )

    }

    async function setImportedMessages() {
        
        const messages = await importMessages(locale);          setMessages(messages)

    }

    useEffect( () => { setLocaleCookie();       setImportedMessages() }, [locale] )


    function setMetadata() { document.title = messages!["metatitle"] }

    useEffect( () => { if (messages) setMetadata() }, [messages] )


    if ( !messages ) return null

    children = <><LanguageSwitcher setLocale={setLocale}/>{children}</>

    return <IntlProvider locale={locale} messages={messages}>{children}</IntlProvider>

}