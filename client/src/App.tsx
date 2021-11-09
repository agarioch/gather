import React, { useEffect, useState } from 'react';
import { getPosts } from './services/gather-api';
import './App.css';
import AuthenticationButton from './components/authentication-button';
import Profile from './components/profile/profile';

function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getPosts().then((res) => setPosts(res));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gather</h1>
        <AuthenticationButton />
        <Profile />
      </header>
      <main>
        <p>App is working.</p>
        <pre>{posts}</pre>
      </main>
    </div>
  );
}

export default App;
