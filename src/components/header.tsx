import { ModeToggle } from "./mode-toggle"
import Image from "next/image"

export const Header = () => {
    return (
        <header className="h-18 flex items-center justify-between py-1.5 px-4 border-b border-border">
            <div className="flex items-center gap-1.5">
                <Image
                    width={32}
                    height={32}
                    src="/icon.jpg"
                    alt="Spaget Logo"
                    className="size-8 rounded-lg"
                />
                <h1 className="text-2xl font-bold">
                    Spaget
                </h1>
            </div>
            <ModeToggle />
        </header>
    )
}
