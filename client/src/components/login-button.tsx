import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from './button/button';

const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button onClick={() => loginWithRedirect()} style={{ width: '6rem' }}>
      Login
    </Button>
  );
};

export default LoginButton;
