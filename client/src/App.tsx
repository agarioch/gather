import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AuthenticationButton from './components/authentication-button';
import Profile from './components/profile/profile';
import Survey from './pages/survey/survey';
import Home from './pages/home/home';
import Feed from './pages/feed/feed';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gather</h1>
        <AuthenticationButton />
        <Profile />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/survey/*" element={<Survey />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
