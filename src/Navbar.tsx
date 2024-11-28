import { Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
    function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
    <Link to="/"  className="flex items-center justify-center" >
      <Sparkles className="h-6 w-6" />
      <span className="sr-only">VideoBlogAI</span>
    </Link>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link to="/" className="text-sm font-medium hover:underline underline-offset-4">
        Home
      </Link>
      <Link to="/pricing" className="text-sm font-medium hover:underline underline-offset-4" >
        Pricing
      </Link>

      <Link to="/contact" className="text-sm font-medium hover:underline underline-offset-4" >
        Contact
      </Link >
    </nav>
  </header>  )
}

export default Navbar