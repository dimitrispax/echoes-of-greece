import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

import quoteService from "./services/quote";
import Navbar from "./components/Navbar";
import QuoteContainer from "./components/QuoteContainer";
import Footer from "./components/Footer";
import BackgroundImage from "./components/BackgroundImage";
import { getRandomIntex } from "./utils/random";

const COPYRIGHT = `Dimitrios Paximadakis \u00A9  ${new Date().getFullYear()}`;
const TOTAL_CLOUD_IMAGES_NUMBER = 10;

const App = (): React.ReactElement => {
  const [quote, setQuote] = useState({ quote: "", author: "" });
  const [randomBackgroundImageIndex, setRandomBackgroundImageIndex] = useState(
    1,
  );
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const initialQuote = await quoteService.getQuote();

        setQuote(initialQuote);
      } catch (e) {
        console.log(e);
      }
    };
    fetchQuote();
  }, []);

  const handleNewQuote = async () => {
    try {
      const newQuote = await quoteService.getQuote();

      setRandomBackgroundImageIndex(
        getRandomIntex(0, TOTAL_CLOUD_IMAGES_NUMBER - 1),
      );

      setAnimateKey((prevKey) => prevKey + 1);

      setQuote(newQuote);
    } catch (e) {
      console.log(e);
    }
  };

  if (quote.quote !== "") {
    return (
      <div className="min-h-screen w-full relative bg-gray-100">
        <div className="absolute inset-0 z-0">
          <BackgroundImage
            index={randomBackgroundImageIndex}
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
            <QuoteContainer quote={quote} />
          </motion.main>

          <Footer copyright={COPYRIGHT} />
        </div>
      </div>
    );
  } else return <></>;
};

export default App;
