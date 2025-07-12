import { Card, CardHeader } from "@/components/ui/card"
import { Header } from "@/components/header"
import { RadioGroup } from "@/components/radio-group"
import { Separator } from "@/components/ui/separator"
import { Form } from "@/components/form"
import { Footer } from "@/components/footer"

export default async function Home() {

  await new Promise((resolve) => setTimeout(resolve, 3000))

  return (
    <div className="flex-1 flex flex-col justify-between">
      <Header />
      <main className="flex-1 flex items-center justify-center max-sm:px-4">
        <Card className="w-full sm:max-w-[425px] bg-background">
          <CardHeader>
            <RadioGroup />
          </CardHeader>
          <Form />
          <Separator />
          <Footer />
        </Card>
      </main>
    </div>
  )
}
