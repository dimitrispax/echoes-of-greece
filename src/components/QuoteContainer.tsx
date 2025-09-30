import type React from "react"
import { useState } from "react"
import { copyContent } from "../utils/copy"

interface QuoteContainerProps {
  quote: {
    quote: string
    author: string
  }
}

const QuoteContainer = ({ quote }: QuoteContainerProps): React.ReactElement => {
  const [buttonText, setButtonText] = useState("Copy")

  /* When the quote is very lengthy let it expand */
  if (quote.quote.length > 350) {
    return (
      <div className="p-5 w-5/6 xl:w-4/6 2xl:w-1/2  h-auto place-self-center flex flex-col flex-wrap gap-1 md:gap-2 xl:gap-3 justify-center items-center rounded-xl bg-transparent transition delay-400 duration-200 ease-in-out group border border-transparent hover:backdrop-blur hover:border-white">
        <div className="w-full h-auto flex justify-center items-center rounded-xl">
          <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-justify text-ellipsis text-white font-theme italic drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)] selection:bg-blue-700">
            &quot;{quote.quote}&quot;
          </p>
        </div>
        <div className="w-full h-auto flex justify-between items-center rounded-xl bg-transparent">
          <button
            type="button"
            onClick={() => copyContent(quote, setButtonText)}
            className="px-1 lg:p-1 text-l md:text-lg lg:text-xl xl:text-2xl text-white font-theme border rounded-lg lg:rounded-xl  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] scale-0 group-hover:scale-100 group-hover:hover:scale-105"
          >
            {buttonText}
          </button>
          <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-justify text-white font-theme drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] selection:bg-blue-700">
            - {quote.author}
          </p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="max-w-xl p-5 w-5/6 xl:w-4/6 2xl:w-1/2  h-auto place-self-center flex flex-col flex-wrap gap-1 md:gap-2 xl:gap-3 justify-center items-center rounded-xl bg-transparent transition delay-400 duration-200 ease-in-out group border border-transparent hover:backdrop-blur hover:border-white">
        <div className="max-w-xl w-full h-auto flex justify-center items-center rounded-xl">
          <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-justify text-ellipsis text-white font-theme italic drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)] selection:bg-blue-700">
            &quot;{quote.quote}&quot;
          </p>
        </div>
        <div className="w-full h-auto flex justify-between items-center rounded-xl bg-transparent">
          <button
            type="button"
            onClick={() => copyContent(quote, setButtonText)}
            className="px-1 lg:p-1 text-l md:text-lg lg:text-xl xl:text-2xl text-white font-theme border rounded-lg lg:rounded-xl  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] scale-0 group-hover:scale-100 group-hover:hover:scale-105"
          >
            {buttonText}
          </button>
          <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-justify text-white font-theme drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] selection:bg-blue-700">
            - {quote.author}
          </p>
        </div>
      </div>
    )
  }
}

export default QuoteContainer
