import React, {useState, useEffect} from 'react'
import quoteService from './services/quote'
import Navbar from './components/Navbar'
import QuoteContainer from './components/QuoteContainer'
import Footer from './components/Footer'

const COPYRIGHT = 'Dimitrios Paximadakis \u00A9 2024'

const App = (): React.ReactElement => {
  const [quote, setQuote] = useState({quote: '', author: ''})

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const initialQuote = await quoteService.getQuote()
        setQuote(initialQuote)
      } catch (e) {
        console.log(e)
      }
    }
    fetchQuote()
  }, [])

  const handleNewQuote = async () => {
    try {
      const newQuote = await quoteService.getQuote()
      setQuote(newQuote)
    } catch (e) {
      console.log(e)
    }
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
