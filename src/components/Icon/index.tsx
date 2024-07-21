import React from 'react';
import * as Icons from '@/icons';

interface IconProps extends IIcons {
  name: keyof typeof Icons;
  size?: number;
}

export interface IIcons extends React.SVGProps<SVGSVGElement> {
  filled?: boolean;
  selected?: boolean;
  color?: string;
}

export type TNameRegularIcon = keyof typeof Icons;
export type TNameIcon = TNameRegularIcon;

export const Icon: React.FC<IconProps> = ({
  size = 24,
  name,
  width,
  color,
  filled,
  height,
  selected,
  style,
}) => {
  const SVGIcon = Icons[name as TNameIcon] as React.ComponentType<IIcons>;

  if (!SVGIcon) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <SVGIcon
      width={width || size}
      height={height || size}
      color={color}
      selected={selected}
      filled={filled}
      style={style}
    />
  );
};
