
"use client"

import { createContext, useContext, useState, Dispatch, SetStateAction, PropsWithChildren } from "react"

type CountDispatch = Dispatch< SetStateAction<number> > | null

const CountStateContext = createContext< number | null >(null)
const CountDispatchContext = createContext<CountDispatch>(null)

export function useCopyCount() {

    const count = useContext( CountStateContext )
    const setCount = useContext( CountDispatchContext )

    if ( !setCount ) throw new Error("useCopyCount must be used within an CopyProvider.")

    return [ count!, setCount ] as const

}

const StateProvider = CountStateContext.Provider
const DispatchProvider = CountDispatchContext.Provider

export function CopyProvider( { children }: PropsWithChildren ) {

    const [ count, setCount ] = useState(0) // Animation count state.

    const Provider = <DispatchProvider value={setCount}>{children}</DispatchProvider>

    return <StateProvider value={count}>{Provider}</StateProvider>

}