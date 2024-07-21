import React, { useState } from 'react';

import './menu-button.scss';

interface IMenuButtonProps {
  onClick?: () => void;
}

export const MenuButton: React.FC<IMenuButtonProps> = ({ onClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }

    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <button
      type='button'
      className={`menu-button ${isMenuOpen ? 'menu-button--open' : ''}`}
      onClick={handleClick}
    >
      <div className='menu-button__inner'>
        <div className='menu-button__line menu-button__line--top'></div>
        <div className='menu-button__line menu-button__line--middle'></div>
        <div className='menu-button__line menu-button__line--bottom'></div>
      </div>
    </button>
  );
};
