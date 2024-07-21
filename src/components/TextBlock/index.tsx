import React, { useEffect, useState } from 'react';
import { Link } from '../Link';

import './text-block.scss';

interface ITextBlockProps {
  title: string;
  href?: string;
  children: React.ReactNode;
}

export const TextBlock: React.FC<ITextBlockProps> = ({ children, title, href }) => {
  const [deviceWidth, setDeviceWidth] = useState<number>(0);

  const handleResize = () => {
    setDeviceWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='text-block'>
      <h3 className='text-block__title'>{title}</h3>
      <p className='text-block__text'>{children}</p>

      <div className='text-block__footer'>
        {href && (
          <Link href={href} text='Read more' device={deviceWidth < 600 ? 'mobile' : 'table'} />
        )}
      </div>
    </div>
  );
};
