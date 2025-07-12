import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex-1 flex items-center justify-center text-2xl font-bold">
            <Card className="w-full sm:max-w-[425px] bg-background">
                <CardHeader>
                    <CardTitle className="text-center">
                        Pagina não encontrada.
                    </CardTitle>
                </CardHeader>
                <Separator />
                <CardFooter>
                    <Button
                        asChild
                        className="w-full"
                        variant="link"
                    >
                        <Link href={"/"} className="text-sm">
                            Voltar para a página inicial
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}