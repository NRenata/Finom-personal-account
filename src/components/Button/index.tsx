import React from 'react';
import './Button.css';

interface ButtonProps {
  width?: 'small' | 'medium' | 'large';
  color?: 'light-royal-12' | 'salmon-pink' | 'royal-blue';
  textColor?: 'text-white' | 'text-blue';
  icon?: JSX.Element;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    width = 'medium',
    color,
    textColor,
    icon,
    children,
    onClick,
    className
  }) => {
  const classes = [
    'button',
    `button--${width}`,
    color ? `button--${color}` : '',
    textColor ? `button--${textColor}` : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button className={classes} onClick={onClick}>
      {icon}
      {children}
    </button>
  );
};