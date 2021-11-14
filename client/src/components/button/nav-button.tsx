import React from 'react';
import { Link } from 'react-router-dom';
import Button from './button';

type NavButtonProps = {
  type: string;
  path: string;
  style?: { [key: string]: any };
  children: React.ReactNode;
};

const NavButton = ({ type, path, style, children }: NavButtonProps) => {
  return (
    <Link to={path}>
      <Button type={type} style={style}>
        {children}
      </Button>
    </Link>
  );
};

export default NavButton;
