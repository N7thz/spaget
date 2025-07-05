"use client"

import {
    Dispatch,
    SetStateAction,
    createContext,
    useContext,
    useState,
    type ReactNode,
} from "react"

export type Case = "uppercase" | "lowercase" | "sensitive"

export type CaseProviderProps = {
    caseType: Case
    setCaseType: Dispatch<SetStateAction<Case>>
}

const CaseTypeContext = createContext({} as CaseProviderProps)

export function CaseTypeProvider({ children }: { children: ReactNode }) {

    const [caseType, setCaseType] = useState<Case>("uppercase")

    const value: CaseProviderProps = {
        caseType, setCaseType,
    }

    return (
        <CaseTypeContext.Provider value={value}>
            {children}
        </CaseTypeContext.Provider>
    )
}

export const useCaseType = () => useContext(CaseTypeContext)
