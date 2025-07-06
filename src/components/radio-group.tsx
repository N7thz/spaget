"use client"

import { useId } from "react"
import { CaseUpper, CaseLower, CaseSensitive } from "lucide-react"
import {
  RadioGroup as RadioGroupRoot, RadioGroupItem
} from "@/components/ui/radio-group"
import { Case, useCaseType } from "@/providers/case-provider"
import { capitalizeAll, cn } from "@/lib/utils"

export const RadioGroup = () => {

  const { caseType, textFomated, setCaseType, setTextFomated } = useCaseType()
  const id = useId()

  function onSubmit({ caseType, text }: { text: string, caseType: Case }) {

    if (caseType === "uppercase") {
      return setTextFomated(text.toUpperCase())
    } else if (caseType === "lowercase") {
      return setTextFomated(text.toLowerCase())
    }

    return setTextFomated(capitalizeAll(text))
  }

  return (
    <RadioGroupRoot
      className="grid-cols-3"
      defaultValue="1"
      onValueChange={(value) => {
        setCaseType(value as Case)
        onSubmit({ caseType: value as Case, text: textFomated })
      }}
    >
      <div className="border-input has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] hover:scale-95">
        <RadioGroupItem
          id={`${id}-uppercase`}
          value="uppercase"
          className="sr-only"
        />
        <CaseUpper
          size={32}
          className={cn(
            caseType === "uppercase" ? "opacity-100" : "opacity-60"
          )}
        />
        <label
          htmlFor={`${id}-uppercase`}
          className="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
        >
          Maiúscula
        </label>
      </div>
      <div className="border-input has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] hover:scale-95">
        <RadioGroupItem
          id={`${id}-lowercase`}
          value="lowercase"
          className="sr-only"
        />
        <CaseLower
          size={32}
          className={cn(
            caseType === "lowercase" ? "opacity-100" : "opacity-60"
          )}
        />
        <label
          htmlFor={`${id}-lowercase`}
          className="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
        >
          Minúsculas
        </label>
      </div>
      <div className="border-input has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] hover:scale-95">
        <RadioGroupItem
          id={`${id}-sensitive`}
          value="sensitive"
          className="sr-only"
        />
        <CaseSensitive
          size={32}
          className={cn(
            caseType === "sensitive" ? "opacity-100" : "opacity-60"
          )}
        />
        <label
          htmlFor={`${id}-sensitive`}
          className="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
        >
          Normalizar
        </label>
      </div>
    </RadioGroupRoot>
  )
}
