import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
// TODO: Add loading animation to run while authenticating
// ! check Auth0 examples to get types to work with HOC; disabling for now
// @ts-ignore

const ProtectedRoute = ({ component, ...args }) => {
  return (
    <Route
      component={withAuthenticationRequired(component, {
        onRedirecting: () => <h2>Loading</h2>,
      })}
      {...args}
    />
  );
};

export default ProtectedRoute;
