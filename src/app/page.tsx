import { Card, CardHeader } from "@/components/ui/card"
import { Header } from "@/components/header"
import { RadioGroup } from "@/components/radio-group"
import { Separator } from "@/components/ui/separator"
import { Form } from "@/components/form"
import { Footer } from "@/components/footer"

export default function Home() {

  return (
    <div className="flex-1 flex flex-col justify-between">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <Card className="w-full sm:max-w-[425px] bg-background">
          <CardHeader>
            <RadioGroup />
          </CardHeader>
          <Form />
          <Separator className="data-[orientation=horizontal]:w-[90%] mx-auto" />
          <Footer />
        </Card>
      </main>
    </div >
  )
}
