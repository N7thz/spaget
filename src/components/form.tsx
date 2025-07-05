import { Button } from "./ui/button"
import { CardContent } from "./ui/card"
import { Textarea } from "./ui/textarea"

export const Form = () => {
    return (
        <form>
            <CardContent className="space-y-2">
                <Textarea placeholder="Digite a palavra ou frase..." />
                <Button
                    type="submit"
                    className="w-full"
                >
                    Gerar
                </Button>
            </CardContent>
        </form>
    )
}
