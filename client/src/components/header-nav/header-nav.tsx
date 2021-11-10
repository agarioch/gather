import React from 'react';
import { Link } from 'react-router-dom';
import './header-nav.css';

const HeaderNav = () => {
  return (
    <nav>
      <ul className="nav">
        <li className="nav__item-container">
          <Link to="/" className="nav__item">
            Home
          </Link>
        </li>
        <li className="nav__item-container">
          <Link to="/feed" className="nav__item">
            Feed
          </Link>
        </li>
        <li className="nav__item-container">
          <Link to="/survey" className="nav__item">
            Survey
          </Link>
        </li>
        <li className="nav__item-container">
          <p className="nav__item">About</p>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
