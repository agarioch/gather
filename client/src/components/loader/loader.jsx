import React from "react";
import { motion } from "framer-motion";
import './loader.css'

// I adapted tutorial code from github/Darth-Knoppix
// https://blog.sethcorker.com/an-easy-loading-animation-with-framer-motion/

const loadingContainer = {
  display: "flex",
  justifyContent: "space-around",
  height: "6rem",
};

const loadingSvg = <svg width="1rem" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="acorn" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-acorn fa-w-14 fa-2x"><g className="fa-group"><path fill="currentColor" d="M32 256h384a258.87 258.87 0 0 1-143.11 231.55L224 512l-48.89-24.45A258.87 258.87 0 0 1 32 256z" className="fa-secondary"></path><path fill="currentColor" d="M448 160v32a32 32 0 0 1-32 32H32a32 32 0 0 1-32-32v-32a96 96 0 0 1 96-96h106a132.41 132.41 0 0 1 29.41-58.64 15.7 15.7 0 0 1 11.31-5.3 15.44 15.44 0 0 1 12 4.72L266 16.1a16 16 0 0 1 .66 21.9 84.32 84.32 0 0 0-15.16 26H352a96 96 0 0 1 96 96z" className="fa-primary"></path></g></svg>

const loadingCircle = {
  alignItems: "center",
  color: "white",
  display: "flex",
  width: "2rem",
  height: "2rem",
  justifyContent: "center",
  backgroundColor: "var(--primary-700)",
  borderRadius: "50%"
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2
    }
  },
  end: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const loadingCircleVariants = {
  start: {
    y: "50%"
  },
  end: {
    y: "150%"
  }
};

const loadingCircleTransition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: 'reverse',
  ease: "easeInOut"
};

export default function Loader() {
  return (
    <div className="loading-wrapper">

      <motion.div
        className="loader"
        style={loadingContainer}
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        >
          {loadingSvg}
        </motion.span>
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        >
          {loadingSvg}
        </motion.span>
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        >
          {loadingSvg}
        </motion.span>
      </motion.div>
      <h2>gathering data ...</h2>
    </div>
  );
}