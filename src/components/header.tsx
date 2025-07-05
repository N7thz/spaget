import { ModeToggle } from "./mode-toggle"

export const Header = () => {
    return (
        <header className="h-18 flex items-center justify-between py-1.5 px-4 border-b border-border">
            <h1 className="text-2xl font-bold">
                Spaget
            </h1>
            <ModeToggle />
        </header>
    )
}
