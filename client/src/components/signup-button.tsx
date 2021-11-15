import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from './button/button';

const SignupButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button type="secondary" onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>
      Signup
    </Button>
  );
};

export default SignupButton;
