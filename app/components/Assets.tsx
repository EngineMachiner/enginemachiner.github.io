
"use client"

import { createContext, useContext, PropsWithChildren } from "react";

import { Assets } from "../assets";

const Context = createContext< Assets | null >(null);             const Provider = Context.Provider

export function useAssets() {

    const context = useContext(Context)

    if ( !context ) throw new Error("useAssets must be used within an AssetsProvider.")

    return context

}

type Props = PropsWithChildren & { value: Assets }

export function AssetsProvider( { value, children }: Props ) {

    return <Provider value={value}>{children}</Provider>

}