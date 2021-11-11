import React from 'react';
import Loader from '../../components/loader/loader';
import './home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h2>Home page</h2>
      <Loader />
    </div>
  );
};

export default Home;
