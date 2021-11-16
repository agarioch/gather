import React from 'react';
import { motion } from 'framer-motion';
import { useAuth0 } from '@auth0/auth0-react';
import '../pages/home/home.css';

const SignupButton: React.FC = (props) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <motion.button
      onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
      className="signup-button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
    >
      Get started ...
    </motion.button>
  );
};

export default SignupButton;
