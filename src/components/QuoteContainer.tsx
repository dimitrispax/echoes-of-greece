import {useState} from 'react'
import {copyContent} from '../helpers/helpers'
interface QuoteContainerProps {
  quote: {
    quote: string
    author: string
  }
}

const QuoteContainer = ({quote}: QuoteContainerProps): React.ReactElement => {
  const [buttonText, setButtonText] = useState('Copy')

  return (
    <div className='p-5 w-5/6 xl:w-4/6 2xl:w-1/2 h-auto place-self-center flex flex-col flex-wrap gap-1 justify-center items-center rounded-xl bg-transparent transition delay-400 duration-200 ease-in-out group hover:backdrop-blur hover:border-dotted hover:border-2'>
      <div className='w-full h-auto flex justify-center items-center rounded-xl bg-transparent'>
        <p className='text-xl md:text-2xl lg:text-3xl text-justify text-ellipsis text-white font-bold  font-theme italic drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] selection:bg-blue-700 '>
          "{quote.quote}"
        </p>
      </div>
      <div className='w-full h-auto flex justify-between items-center rounded-xl bg-transparent'>
        <button
          onClick={() => copyContent(quote, setButtonText)}
          className='px-1 lg:p-1 text-lg mr-2 md:text-xl lg:text-xl text-white font-theme border rounded-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] scale-0 group-hover:hover:scale-105 group-hover:scale-100'
        >
          {buttonText}
        </button>

        <p className='text-xl md:text-3xl lg:text-3xl text-justify text-white  font-theme drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] selection:bg-blue-700'>
          - {quote.author}
        </p>
      </div>
    </div>
  )
}

export default QuoteContainer
