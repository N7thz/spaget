"use client"

import { Button } from "./ui/button"
import { CardContent } from "./ui/card"
import { Textarea } from "./ui/textarea"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Info } from "lucide-react"
import { useCaseType } from "@/providers/case-provider"
import { capitalizeAll } from "@/lib/utils"

const formSchema = z.object({
    text: z.string().min(1, "Digite a palavra ou frase"),
})

type FormData = z.infer<typeof formSchema>

export const Form = () => {

    const { caseType, setTextFomated } = useCaseType()

    const {
        watch,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    })

    function onSubmit({ text }: FormData) {

        if (caseType === "uppercase") {
            return setTextFomated(text.toUpperCase())
        } else if (caseType === "lowercase") {
            return setTextFomated(text.toLowerCase())
        }

        return setTextFomated(capitalizeAll(text))
    }

    const text = watch("text") as string | undefined

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="space-y-2.5">
                <Textarea
                    placeholder="Digite a palavra ou frase..."
                    {...register("text")}
                    className="max-h-[300px]"
                />
                {
                    errors.text && (
                        <span className="flex items-center gap-1.5 text-destructive py-2">
                            <Info className="size-4" />
                            <p className="text-sm">
                                {errors.text.message}
                            </p>
                        </span>

                    )
                }
                <Button
                    type="submit"
                    className="w-full"
                    disabled={text?.length === 0}
                >
                    Gerar
                </Button>
            </CardContent>
        </form>
    )
}
