import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loader from '../components/loader/loader';
// TODO: Add loading animation to run while authenticating
// ! check Auth0 examples to get types to work with HOC; disabling for now
// @ts-ignore

const ProtectedRoute = ({ component, ...args }) => {
  return (
    <Route
      component={withAuthenticationRequired(component, {
        onRedirecting: () => <Loader />,
        returnTo: '/feed',
      })}
      {...args}
    />
  );
};

export default ProtectedRoute;
