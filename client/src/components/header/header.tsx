import React from 'react';
import './header.css';

const Header: React.FC = ({ children }) => (
  <header className="header">
    <div className="header__logo">
      <img src="/gather-squirrel-primary.svg" alt="Gather mascot" height="30px" />
      <h1 className="header__logo--text">Gather</h1>
    </div>
    <div className="header--pull-right">{children}</div>
  </header>
);

export default Header;
