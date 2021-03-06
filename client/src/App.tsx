import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import AuthenticationButton from './components/authentication-button';
import Profile from './components/profile/profile';
import SurveyPage from './pages/survey-page/survey-page';
import Home from './pages/home/home';
import Feed from './pages/feed/feed';
import ProtectedRoute from './auth/protected-route';
import Header from './components/header/header';
import HeaderNav from './components/header-nav/header-nav';
import CreateSurvey from './pages/create-survey/create-survey';
import About from './pages/about/about';
import Responses from './pages/responses/responses';
import SurveyResponses from './pages/survey-responses/survey-responses';
import useGetUsers from './hooks/useGetUsers';

type User = {
  name: string;
  picture: string;
  role: string;
  votes: number;
};
type Users = {
  [email: string]: User;
};

export const UserContext = React.createContext<Users>({});

function App() {
  const usersQuery = useGetUsers();
  const userDetails = usersQuery.data;

  return (
    <div className="App">
      <UserContext.Provider value={userDetails}>
        <Header>
          <HeaderNav />
          <Profile />
          <AuthenticationButton />
        </Header>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <ProtectedRoute path="/feed" component={Feed} />
            <ProtectedRoute path="/survey" exact component={CreateSurvey} />
            <ProtectedRoute path="/survey/:id" exact component={SurveyPage} />
            <ProtectedRoute path="/survey/:id/responses" exact component={SurveyResponses} />
            <ProtectedRoute path="/responses" exact component={Responses} />
            <ProtectedRoute path="/about" exact component={About} />
          </Switch>
        </main>
      </UserContext.Provider>
    </div>
  );
}

export default App;
