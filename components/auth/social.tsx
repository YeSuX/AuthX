'use client'

import { Button } from "../ui/button"
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

const Social = () => {
  return (
    <div className="flex items-center gap-x-2 w-full">
        <Button
            variant="outline"
            className="w-full"
            onClick={() => {
                console.log("google")
            }}
            size="lg"
        >
            
            <FcGoogle className="size-5" />
        </Button>
        <Button
            variant="outline"
            className="w-full"
            onClick={() => {
                console.log("github")
            }}
            size="lg"
        >
            
            <FaGithub className="size-5" />
        </Button>
    </div>
  )
}
export default Social