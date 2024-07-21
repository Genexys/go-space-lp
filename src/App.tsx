import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { fetchOfferCards } from './mockData/fetchOfferData';
import { OfferCards } from './components/OfferCards';
import { Footer } from './components/Footer';
import { TextBlock } from './components/TextBlock';

import './App.scss';

const App: React.FC = () => {
  const [offerCards, setOfferCards] = useState<IFetchDataOffer[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadCards = async () => {
    try {
      setIsLoading(true);
      const data = await fetchOfferCards();

      setOfferCards(data.offerCards);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadCards();
  }, []);

  return (
    <div className='page'>
      <Header />
      <main>
        <Banner />
        <div className='container main-container'>
          <OfferCards data={offerCards} isLoading={isLoading} />
          <TextBlock title='Embark on a space journey' href='/learn-more/space-exploration'>
            Travelling into space is one of the most exciting and unforgettable adventures that can
            change your life forever. And if you have ever dreamed of exploring stars, planets and
            galaxies, then our company is ready to help you realize this dream. We offer a unique
            experience that will allow you to go on a space journey and see all the secrets of the
            universe. We guarantee that every moment in space will be filled with incredible
            impressions, excitement and new discoveries. Our team of professionals takes care of
            your safety and comfort so that you can fully enjoy your adventure in space. We offer
            various options for space excursions.
          </TextBlock>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
