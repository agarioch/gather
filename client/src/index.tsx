import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
