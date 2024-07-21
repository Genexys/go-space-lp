import React from 'react';
import { Card } from '../Card';

import './offer-cards.scss';

interface IOfferCardsProps {
  data: IFetchDataOffer[];
  isLoading: boolean;
}

export const OfferCards: React.FC<IOfferCardsProps> = ({ data, isLoading }) => {
  return (
    <section className='offers'>
      {data.length === 0 && <h3 className='offers__title'>No offers found</h3>}

      {data.length > 0 && <h3 className='offers__title'>Offers</h3>}

      <div className='offers-cards'>
        {isLoading
          ? 'Loading...'
          : data.map((offer, index) => (
              <Card
                key={offer.id}
                size={index === 0 || index === data.length - 1 ? 'large' : 'small'}
                {...offer}
              />
            ))}
      </div>
    </section>
  );
};
