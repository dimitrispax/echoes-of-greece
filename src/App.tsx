import {useState, useEffect} from 'react'
import quoteService from './services/quote'
import Navbar from './components/Navbar'
import QuoteContainer from './components/QuoteContainer'
import Footer from './components/Footer'

const COPYRIGHT = 'Dimitrios Paximadakis \u00A9 2024'

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
      <div className='h-screen w-screen overflow-hidden flex flex-col bg-cover bg-center bg-background'>
        <Navbar handleNewQuote={handleNewQuote} />
        <div className='h-dvh flex flex-wrap justify-center'>
          <QuoteContainer quote={quote} />
        </div>
        <Footer copyright={COPYRIGHT} />
      </div>
    )
  else return <></>
}

export default App
