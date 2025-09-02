
import "./global.css";

import { Metadata } from "next"
import { PropsWithChildren } from "react";

import assets from "./assets";

import Loading from "./components/Loading";
import Background from "./components/Background";
import { AssetsProvider } from "./components/Assets";
import LanguageSetup from "./components/language/Setup";
import { ParticlesInitializer } from "./components/Particles";

export const metadata: Metadata = {

    title: "enginemachiner.github.io",         description: "A personal website made by Manuel P / Engine_Machiner",
    icons: "/icon.png"

}

export default function Layout( { children }: PropsWithChildren ) {

    children = <><Background/><Loading/><ParticlesInitializer/>{children}</>

    const Language = <LanguageSetup>{children}</LanguageSetup>

    const Provider = <AssetsProvider value={assets}>{Language}</AssetsProvider>

    const Body = <body>{Provider}</body>;          return <html>{Body}</html>

}
