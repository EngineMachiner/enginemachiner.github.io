
import { Metadata } from "next";        import "./global.css";

import assetsTree from "./assets";
import { ChildrenProps } from "./util";

import Loading from "./components/Loading";
import TreeProvider from "./components/TreeProvider";
import LanguageSetup from "./components/language/Setup";
import ParticlesInitializer from "./components/Particles";

export const metadata: Metadata = {

    title: "enginemachiner.github.io",         description: "A personal website made by Manuel P / Engine_Machiner",
    icons: "/icon.png"

}

export default function Layout( { children }: ChildrenProps ) {

    children = <Loading><ParticlesInitializer/>{children}</Loading>

    const language = <LanguageSetup>{children}</LanguageSetup>

    const provider = <TreeProvider value={assetsTree}>{language}</TreeProvider>

    const body = <body>{provider}</body>;          return <html>{body}</html>

}
