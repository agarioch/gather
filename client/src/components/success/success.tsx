import React from 'react';
import { motion } from 'framer-motion';
import './success.css';

const Success: React.FC = () => {
  return (
    <div className="success__wrapper">
      <motion.div
        className="success__bg"
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
      ></motion.div>
      <div className="success__icon">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
          <motion.path
            stroke="currentColor"
            fill="transparent"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1rem"
            d="M10 130l40 40L190 70"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    </div>
  );
};

export default Success;
