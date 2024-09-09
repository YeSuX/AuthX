import Link from "next/link"
import { Button } from "../ui/button"

interface BackButtonProps {
    label: string
    link: string
}

const BackButton = ({
    label,
    link,
}: BackButtonProps) => {
  return (
    <Button
        variant="ghost"
        className="w-full"
        size="sm"
        asChild
    >
        <Link href={link}>
            {label}
        </Link>
    </Button>
  )
}
export default BackButton