import React from 'react';
import { motion } from 'framer-motion';
import { useAuth0 } from '@auth0/auth0-react';
import '../pages/home/home.css';

const SignupButton: React.FC = (props) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button onClick={() => loginWithRedirect({ screen_hint: 'signup' })} className="signup-button">
      Signup
    </button>
  );
};

export default SignupButton;
