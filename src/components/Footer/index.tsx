import React from 'react';
import Rocket from '../../assets/img/rocket.png';

import './footer.scss';

export const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <div className='footer__content'>
        <img src={Rocket} className='footer__logo' alt='Rocket' />
        <p className='footer__text'>Exciting space adventure!</p>
      </div>
    </div>
  );
};
