import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

type Props = {
  children?: React.ReactNode;
};
type AppState = {
  returnTo?: string;
  [key: string]: any;
};

const Auth0ProviderWithHistory = ({ children }: Props) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN || '';
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || '';
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE || '';

  const history = useHistory();

  const onRedirectCallback = (appState: AppState) => {
    history.push(appState?.returnTo || window.location.pathname + 'feed/');
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
