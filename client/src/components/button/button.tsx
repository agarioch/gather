import React from 'react';
import classNames from 'classnames';
import './button.css';

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  type?: string;
}

const Button: React.FC<Props> = ({ children, onClick, type }: Props) => {
  const btnClass = classNames([
    'btn',
    {
      'btn-secondary': type === 'secondary',
    },
  ]);

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
