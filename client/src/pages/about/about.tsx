import React from 'react';
import Card from '../../components/card/card';
import './about.css';

const About = () => (
  <div className="about">
    <Card>
      <h1>Overview</h1>
      <h1>My Process</h1>
      <ul>
        <li>Built With</li>
        <li>What I Learned</li>
        <li>Useful Resources</li>
      </ul>
      <h1>Acknowledgements</h1>
    </Card>
  </div>
);

export default About;
