import React from 'react';
import { Button } from '../Button';

import './card.scss';

type TCardOffer = IFetchDataOffer & { size: 'large' | 'small' };

export const Card: React.FC<TCardOffer> = ({ title, subtitle, imageUrl, link, size }) => {
  return (
    <div className={`card card--${size}`}>
      <div className='card__content'>
        <h3 className='card__title'>{title}</h3>
        <p className='card__subtitle'>{subtitle}</p>
        <div className='card__link'>
          <Button type='outline' device='table' text='Learn more' href={link} />
        </div>
      </div>
      <img className='card__image' src={imageUrl} alt={title} />
    </div>
  );
};
