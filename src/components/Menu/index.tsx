import React from 'react';
import './menu.scss';

interface IMenuProps {
  children: React.ReactNode;
}

export const Menu: React.FC<IMenuProps> = ({ children }) => {
  return (
    <nav className='menu'>
      <ul className='menu__list'>{children}</ul>
    </nav>
  );
};
