import React from 'react';
import { Button } from '@/components/Button';
import Earth from '../../assets/img/Earth.png';

import './banner.scss';

export const Banner = () => {
  let image = new Image();
  image.src = Earth;

  return (
    <div className='banner'>
      <div className='container banner__container'>
        <div className='banner__content'>
          <h1 className='banner__title'>
            Discover the vast expanses of <span>space</span>
          </h1>
          <p className='banner__text'>
            Where the possibilities are <span>endless!</span>
          </p>
          <Button device='mobile' text='Learn more' href='#' type='filled' />
        </div>

        <div className='banner__image'>
          <img src={Earth} alt='Banner image' />
        </div>
      </div>
    </div>
  );
};
