import React from 'react';

import './link.scss';

interface ILinkProps {
  text: string;
  href: string;
  device?: 'mobile' | 'table';
}

export const Link: React.FC<ILinkProps> = ({ href, text, device }) => {
  return (
    <a href={href} className={`link ${device ? `link--${device}` : ''}`}>
      {text}
    </a>
  );
};
