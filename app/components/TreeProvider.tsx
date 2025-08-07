
"use client"

import { createContext } from "react";
import { ChildrenProps } from "../util";

type Context = any | null

export const TreeContext = createContext<Context>(null);             const Provider = TreeContext.Provider

type Props = ChildrenProps & { value: any }

export default function TreeProvider( { value, children }: Props ) {

    return <Provider value={value}>{children}</Provider>

}