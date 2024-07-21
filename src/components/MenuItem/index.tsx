import React from 'react';
import { Icon, type TNameIcon } from '@/components/Icon';

import './menu-item.scss';

interface IMenuItemProps {
  text?: string;
  icon?: TNameIcon;
  children?: React.ReactNode;
}

export const MenuItem: React.FC<IMenuItemProps> = ({ children, text, icon }) => {
  return (
    <li className='menu__item' data-text={text}>
      {icon && <Icon name={icon} />}
      {text && <span>{text}</span>}
      {children}
    </li>
  );
};
