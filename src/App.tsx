import {useState, useEffect} from 'react'
import quoteService from './services/quote'
import Navbar from './components/Navbar'
import QuoteContainer from './components/QuoteContainer'
import Background from './components/Background'

const App = () => {
  const [quote, setQuote] = useState({quote: '', author: ''})
  const [refresh, setRefresh] = useState(true)

  useEffect(() => {
    quoteService.getQuote().then((initialQuote) => setQuote(initialQuote))
  }, [])

  const handleNewQuote = async () => {
    await quoteService.getQuote().then((initialQuote) => setQuote(initialQuote))

    setRefresh(!refresh)
  }

  if (quote.quote !== '')
    return (
      <div className='h-dvh flex justify-center items-center'>
        <Navbar HandleNewQuote={handleNewQuote} />
        <Background />
        <div className='absolute bg-wave-pattern bg-repeat-x h-20 w-20'></div>

        <QuoteContainer Quote={quote} />
      </div>
    )
  else return <></>
}

export default App
