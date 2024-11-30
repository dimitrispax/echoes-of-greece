import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

import Navbar from "./components/Navbar";
import QuoteContainer from "./components/QuoteContainer";
import Footer from "./components/Footer";
import LoadingAnimation from "./components/LoadingAnimation";
import BackgroundImage from "./components/BackgroundImage";

import quoteService from "./services/quote";

import { getRandomIndex } from "./utils/random";

const COPYRIGHT = `Dimitrios Paximadakis \u00A9  ${new Date().getFullYear()}`;
const TOTAL_CLOUD_IMAGES_NUMBER = 10;

const App = (): React.ReactElement => {
  const [quote, setQuote] = useState({ quote: "", author: "" });
  const [randomBackgroundImageIndex, setRandomBackgroundImageIndex] = useState(1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isQuoteLoaded, setIsQuoteLoaded] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = async () => {
    setIsInitialRender(false);
    setIsImageLoaded(false);
    setIsQuoteLoaded(false)
    setRandomBackgroundImageIndex(getRandomIndex(randomBackgroundImageIndex, 0, TOTAL_CLOUD_IMAGES_NUMBER - 1))
  };

  const fetchQuote = async () => {
    try {
      const quote = await quoteService.getQuote();

      setQuote(quote);

      setAnimateKey((prevKey) => prevKey + 1);

    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (isImageLoaded && !isInitialRender) {
      fetchQuote();
    }
  }, [isImageLoaded]);


  useEffect(() => {
    if (quote.quote) {
      setIsQuoteLoaded(true);
    }
  }, [quote]);


  if (quote.quote !== "") {
    return (
      <div className="min-h-screen w-full relative bg-gray-100">
        <div className="absolute inset-0 z-0">
          <BackgroundImage
            index={randomBackgroundImageIndex}
            setIsImageLoaded={setIsImageLoaded}
          />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar handleNewQuote={handleNewQuote} />


          <motion.main
            initial={{ opacity: 0, scale: 0.9 }}
            key={animateKey}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 0.3,
              ease: [0.6, -0.05, 0.01, 0.99], // Smooth easing bezier curve
            }}
            className="flex-grow flex items-center justify-center p-4"
          >
            {isQuoteLoaded ? <QuoteContainer quote={quote} /> : <LoadingAnimation />}
          </motion.main>

          <Footer copyright={COPYRIGHT} />
        </div>
      </div>
    );
  } else return <></>;


}
export default App;
