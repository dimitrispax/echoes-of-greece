import {FC} from 'react'

interface Props {
  HandleNewQuote: () => void
}

const Navbar: FC<Props> = ({HandleNewQuote}) => {
  return (
    <header>
      <nav className='w-full h-12 flex items-center justify-between backdrop-grayscale border-dotted border-b-2'>
        <h2 className='p-3 text-lg md:text-xl lg:text-2xl text-white font-custom select-none'>
          Echoes of Greece
        </h2>
        <button
          onClick={HandleNewQuote}
          className='px-1 lg:p-1 text-lg mr-2 md:text-xl lg:text-xl text-white font-custom border rounded-xl backdrop-blur hover:scale-105 hover:transition duration-100'
        >
          New Quote
        </button>
      </nav>
    </header>
  )
}

export default Navbar
