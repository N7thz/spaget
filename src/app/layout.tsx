import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/providers/theme-provider"
import { CaseTypeProvider } from "@/providers/case-provider"
import { Background } from "@/components/background"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"
import "./globals.css"

const jet = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Spaget",
  description: "Formate palavras e frases em caixa alta, baixa, capitalizada e mais.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const year = new Date().getFullYear()

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn(jet.className, "h-dvh overflow-hidden flex flex-col")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <CaseTypeProvider>
            <Background />
            <Toaster />
            {children}
          </CaseTypeProvider>
        </ThemeProvider>
        <footer className="bg-background border-t border-border text-center text-sm text-muted-foreground py-1">
          {year} © Spaget Todos os direitos reservados.
        </footer>
      </body>
    </html>
  )
}
