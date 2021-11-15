import React from 'react';
import Button from '../../components/button/button';
import Loader from '../../components/loader/loader';
import SignupButton from '../../components/signup-button';
import './home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="hero__wrapper">
        <section className="hero">
          <div className="hero__text">
            <div className="hero__tagline">
              <p>Opinions, ideas and</p>
              <p>feedback for better</p>
              <p>functioning teams</p>
            </div>
            <p className="hero__paragraph">
              Gather helps you to understand your team through surveys and posts. It's like Slido
              and Typeform combined but focused on ongoing feedback rather one off presentations &
              milestones.
            </p>
          </div>
          <img className="hero__image" src="/red-squirrel-flickr-tony-cox.jpeg" alt="squirrel" />
        </section>
        <svg
          id="visual"
          viewBox="0 0 1200 100"
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <path
            d="M0 69L25 65.5C50 62 100 55 150 50.8C200 46.7 250 45.3 300 47.5C350 49.7 400 55.3 450 57.8C500 60.3 550 59.7 600 56.8C650 54 700 49 750 42.3C800 35.7 850 27.3 900 32.3C950 37.3 1000 55.7 1050 59C1100 62.3 1150 50.7 1175 44.8L1200 39L1200 101L1175 101C1150 101 1100 101 1050 101C1000 101 950 101 900 101C850 101 800 101 750 101C700 101 650 101 600 101C550 101 500 101 450 101C400 101 350 101 300 101C250 101 200 101 150 101C100 101 50 101 25 101L0 101Z"
            fill="#f9fafb"
            stroke-linecap="round"
            stroke-linejoin="miter"
          ></path>
        </svg>
      </div>
      <section className="signup__wrapper"></section>
    </div>
  );
};

export default Home;
