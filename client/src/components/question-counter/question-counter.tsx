import React from 'react';
import { motion } from 'framer-motion';
import { useWatch, Control, FieldValues } from 'react-hook-form';
import './question-counter.css';

type QuestionCounterProps = {
  control: Control<FieldValues>;
};

const QuestionCounter = ({ control }: QuestionCounterProps) => {
  const count = useWatch({
    control,
    name: 'questions',
  });
  console.log(count);

  if (count?.length) {
    return (
      <div className="progress__wrapper">
        <p className="progress__info">
          <span className="progress__count">{count.length}</span> questions (we recommend max 10
          questions)
        </p>
        <div className="progress__bar">
          <motion.span
            className="progress__bar--filled"
            animate={{ width: `${(count.length / 20) * 100}%` }}
            initial={{ width: 0 }}
          ></motion.span>
        </div>
      </div>
    );
  }
  return (
    <div className="progress__wrapper">
      <p className="progress__info">Add some questions...</p>
    </div>
  );
};

export default QuestionCounter;
