import {FC} from 'react'

interface Props {
  Quote: {
    quote: string
    author: string
  }
}

const QuoteContainer: FC<Props> = ({Quote}) => {
  return (
    <div className='absolute p-5 w-5/6 md:w-4/6 lg:w-1/2 h-auto flex flex-col justify-center items-center rounded-xl bg-transparent  transition delay-150 duration-300 ease-in-out hover:backdrop-blur'>
      <div className='w-full h-auto flex justify-center items-center rounded-xl bg-transparent'>
        <p className='text-xl md:text-2xl lg:text-3xl text-justify text-white font-bold  font-custom italic drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] selection:bg-blue-700 '>
          "{Quote.quote}"
        </p>
      </div>
      <div className='w-full h-auto flex justify-end items-center rounded-xl bg-transparent'>
        <p className='text-xl md:text-2xl lg:text-3xl text-justify text-white font-semibold font-custom drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
          - {Quote.author}
        </p>
      </div>
    </div>
  )
}

export default QuoteContainer
