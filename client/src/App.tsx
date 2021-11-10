import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import AuthenticationButton from './components/authentication-button';
import Profile from './components/profile/profile';
import Survey from './pages/survey/survey';
import Home from './pages/home/home';
import Feed from './pages/feed/feed';
import ProtectedRoute from './auth/protected-route';
import Header from './components/header/header';
import HeaderNav from './components/header-nav/header-nav';

function App() {
  return (
    <div className="App">
      <Header>
        <HeaderNav />
        <Profile />
        <AuthenticationButton />
      </Header>
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/feed" component={Feed} />
          <ProtectedRoute path="/survey" exact component={Survey} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
