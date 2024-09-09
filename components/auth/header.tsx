import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"

interface HeaderProps {
    label: string
}

const font = Poppins({
    weight: ["600", "700"],
    subsets: ["latin"],
})

const Header = ({
    label,
}: HeaderProps) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className={
                cn(
                    "text-2xl font-bold",
                    font.className
                )
            }>
                🔐 Auth
            </h1>
            <p className="text-sm text-gray-500">
                {label}
            </p>
        </div>
    )
}
export default Header