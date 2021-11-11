import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from './button/button';

const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();
  return (
    <Button
      type="secondary"
      onClick={() => logout({ returnTo: window.location.origin })}
      style={{ width: '6rem' }}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
