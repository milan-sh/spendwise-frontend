import { Button } from "@/components/ui/button"
import Logo from "./Logo"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 md:px-8 py-2 md:py-4">
      <Logo/>
      <Button
      className="text-white cursor-pointer rounded-full text-lg font-normal"
      variant="outline"
      size="lg"
      >Get started</Button>
    </nav>
  )
}

export default Navbar
