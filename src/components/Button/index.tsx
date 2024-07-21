import React from 'react';

import './button.scss';

interface IButtonProps {
  text: string;
  href: string;
  type: 'outline' | 'filled';
  device?: 'mobile' | 'table';
}

export const Button: React.FC<IButtonProps> = ({ href, text, type, device }) => {
  return (
    <a href={href} className={`button button--${type} ${device ? `button--${device}` : ''}`}>
      {text}
    </a>
  );
};
