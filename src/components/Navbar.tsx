import {FC} from 'react'

interface Props {
  HandleNewQuote: () => void
}

const Navbar: FC<Props> = ({HandleNewQuote}) => {
  return (
    <header>
      <nav className='absolute top-0 z-10 w-full h-12 flex items-center justify-between backdrop-grayscale border-dotted border-b-2'>
        <h2 className='p-3 text-lg md:text-xl lg:text-2xl text-white font-custom'>
          Echoes of Greece
        </h2>
        <button
          onClick={HandleNewQuote}
          className='p-1 text-lg mr-2 md:text-xl lg:text-xl text-white font-custom border-2 border-dotted rounded-lg'
        >
          New Quote
        </button>
      </nav>
    </header>
  )
}

export default Navbar
