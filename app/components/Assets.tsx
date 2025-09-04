
"use client"

import { createContext, useContext, PropsWithChildren } from "react";

import { Assets } from "../assets";

const Context = createContext< Assets | null >(null);             const Provider = Context.Provider

export function useAssets() {

    const assets = useContext(Context)

    if ( !assets ) throw new Error("useAssets must be used within an AssetsProvider.")

    return assets

}

type Props = PropsWithChildren & { value: Assets }

export function AssetsProvider( { value, children }: Props ) {

    return <Provider value={value}>{children}</Provider>

}