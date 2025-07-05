import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Copy } from "lucide-react"
import { RadioGroup } from "@/components/radio-group"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Home() {

  return (
    <div className="min-h-dvh flex flex-col justify-between">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <Card className="w-full sm:max-w-[425px] bg-background">
          <CardHeader>
            <RadioGroup />
          </CardHeader>
          <form>
            <CardContent className="space-y-2">
              <Textarea placeholder="Digite a palavra ou frase..." />
              <Button type="submit" className="w-full">
                Gerar
              </Button>
            </CardContent>
          </form>
          <Separator className="data-[orientation=horizontal]:w-[90%] mx-auto" />
          <CardFooter className="gap-2">
            <Input readOnly />
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size={"icon"}>
                  <Copy />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copiar</p>
              </TooltipContent>
            </Tooltip>
          </CardFooter>
        </Card>
      </main>
    </div >
  )
}
