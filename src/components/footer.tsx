"use client"

import { CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useCaseType } from "@/providers/case-provider"

export const Footer = () => {

    const { textFomated } = useCaseType()

    console.log("textFomated", textFomated)

    return (
        <CardFooter className="gap-2">
            <Input readOnly value={textFomated} />
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        size={"icon"}
                        disabled={textFomated.length === 0}
                        onClick={() => navigator.clipboard.writeText(textFomated)}
                        onCopy={() => alert("Texto copiado para a área de transferência")}
                    >
                        <Copy />
                    </Button>
                </TooltipTrigger>
                {
                    textFomated.length !== 0 && (
                        <TooltipContent>
                            <p>
                                Copiar para área de transferência
                            </p>
                        </TooltipContent>
                    )
                }
            </Tooltip >
        </CardFooter >

    )
}
