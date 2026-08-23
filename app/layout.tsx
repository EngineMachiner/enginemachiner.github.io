
import "./global.css";

import { Metadata } from "next"
import { PropsWithChildren } from "react";

import assets from "./assets";
import { bodyFont } from "./util";

import Loading from "./components/Loading";
import Background from "./components/Background";
import { AssetsProvider } from "./components/Assets";
import LanguageSetup from "./components/language/Setup";
import { ParticlesInitializer } from "./components/Particles";
import { DEFAULT_LOCALE } from "@/i18n";

export const metadata: Metadata = {

    title: "enginemachiner.github.io",         description: "A personal website made by Manuel P / Engine_Machiner",
    icons: "/icon.png"

}

export default function Layout( { children }: PropsWithChildren ) {

    children = <><Background/><Loading/><ParticlesInitializer>{children}</ParticlesInitializer></>

    const Language = <LanguageSetup>{children}</LanguageSetup>

    const Provider = <AssetsProvider value={assets}>{Language}</AssetsProvider>

    const Body = <body className={ bodyFont.className }>{Provider}</body>;          return <html lang={DEFAULT_LOCALE}>{Body}</html>

}
