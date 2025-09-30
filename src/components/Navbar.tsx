import type React from "react"

interface NavbarProps {
  handleNewQuote: () => void
}

const Navbar = ({ handleNewQuote }: NavbarProps): React.ReactElement => {
  return (
    <header>
      <nav className="w-full h-12 flex items-center justify-between backdrop-grayscale border-b">
        <h2 className="p-3 text-xl md:text-2xl text-white font-theme select-none">Echoes of Greece</h2>
        <button
          type="button"
          onClick={handleNewQuote}
          className="px-1 lg:p-1 text-lg mr-2 md:text-xl lg:text-xl text-white font-theme border rounded-xl backdrop-blur hover:scale-105 hover:transition duration-100"
        >
          New Quote
        </button>
      </nav>
    </header>
  )
}

export default Navbar
