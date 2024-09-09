import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import BackButton from "./back-button"
import Header from "./header"
import Social from "./social"

interface CardWrapperProps {
    children: React.ReactNode
    headerLabel: string
    showSocial?: boolean
    backButtonLabel: string
    backButtonLink: string
}

const CardWrapper = ({
    children,
    headerLabel,
    showSocial = true,
    backButtonLabel,
    backButtonLink,
}: CardWrapperProps) => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {
                showSocial && (
                    <CardFooter>
                        <Social />
                    </CardFooter>
                )
            }
            <CardFooter>
                <BackButton label={backButtonLabel} link={backButtonLink} />
            </CardFooter>
        </Card>
    )
}
export default CardWrapper