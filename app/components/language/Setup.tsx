
"use client"

import { NextIntlClientProvider as IntlProvider } from "next-intl";
import { getCookie, setCookie } from "cookies-next/client";
import { useEffect, useState } from "react";

import { COOKIE_LOCALE_KEY, DEFAULT_LOCALE, LOCALES } from "@/i18n";
import { ChildrenProps, messages as importMessages } from "@/app/util";

import LanguageSwitcher from "./Switcher";

function localeCookie() { return getCookie( COOKIE_LOCALE_KEY ) }

function browserLanguage() {

    const language = navigator.language;          return language.split('-')[0]

}

export default function LanguageSetup( { children }: ChildrenProps ) {

    const [ locale, setLocale ] = useState( DEFAULT_LOCALE )
    
    const [ messages, setMessages ] = useState(null)


    function setInitialLocale() {

        const locale = localeCookie() || browserLanguage();           setLocale( locale )

    }

    function setLocaleCookie() {

        const includes = LOCALES.includes(locale);          if ( !includes ) return

        setCookie( COOKIE_LOCALE_KEY, locale, { maxAge: 60 * 60 * 24 * 365 } )

    }

    async function setImportedMessages() {
        
        const messages = await importMessages(locale);          setMessages(messages)

    }

    function setMetadata() { document.title = messages!["metatitle"] }


    useEffect( () => setInitialLocale(), [] )

    useEffect( () => { setLocaleCookie();       setImportedMessages() }, [locale] )


    if ( !messages ) return;            setMetadata()
    
    children = <><LanguageSwitcher setLocale={setLocale}/>{children}</>

    return <IntlProvider locale={locale} messages={messages}>{children}</IntlProvider>

}