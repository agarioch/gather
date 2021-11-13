import React, { useState } from 'react';
import './replies.css';
import { motion } from 'framer-motion';
import { Reply } from '../../types';

type RepliesProps = {
  replies: Reply[];
};

const Replies = ({ replies }: RepliesProps) => {
  return (
    <>
      {replies.map((reply) => (
        <motion.p key={reply.date}>{reply.content}</motion.p>
      ))}
    </>
  );
};

export default Replies;
