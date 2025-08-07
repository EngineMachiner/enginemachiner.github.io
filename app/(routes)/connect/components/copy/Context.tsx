
"use client"

import { ChildrenProps } from "@/app/util";
import { createContext, useState } from "react"

type State = number | null

const StateContext = createContext<State>(null)
const DispatchContext = createContext<any>(null)

export const copyContexts = [ StateContext, DispatchContext ]

export default function CopyProvider( { children }: ChildrenProps ) {

    const [ animate, setAnimate ] = useState<State>(null)

    const StateProvider = StateContext.Provider;            const DispatchProvider = DispatchContext.Provider

    const Provider = <DispatchProvider value={setAnimate}>{children}</DispatchProvider>

    return <StateProvider value={animate}>{Provider}</StateProvider>

}