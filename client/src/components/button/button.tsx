import React from 'react';
import classNames from 'classnames';
import './button.css';

interface Props {
  children?: React.ReactNode;
  onClick?: (e?: any) => void;
  type?: string;
  style?: { [key: string]: string };
}

const Button: React.FC<Props> = ({ children, onClick, type, style }: Props) => {
  const btnClass = classNames([
    'btn',
    {
      'btn-secondary': type === 'secondary',
      'btn-tertiary': type === 'tertiary',
    },
  ]);

  const actionType = type === 'submit' ? 'submit' : 'button';

  return (
    <button className={btnClass} onClick={onClick} style={style} type={actionType}>
      {children}
    </button>
  );
};
export default Button;
