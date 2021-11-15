import React from 'react';
import { formatDistanceToNow, parseISO, isValid, compareAsc } from 'date-fns';
import './replies.css';
import { motion } from 'framer-motion';
import { Reply } from '../../types';
import { ProfilePicture } from '../profile/profile-pictures';

type RepliesProps = {
  replies: Reply[];
};

const Replies = ({ replies }: RepliesProps) => {
  return (
    <>
      {replies
        .sort((a, b) => {
          const dateA = isValid(parseISO(a.date)) ? parseISO(a.date) : new Date(1);
          const dateB = isValid(parseISO(b.date)) ? parseISO(b.date) : new Date(1);
          return compareAsc(dateB, dateA);
        })
        .map((reply) => {
          const replyTime = isValid(parseISO(reply.date))
            ? formatDistanceToNow(parseISO(reply.date), { addSuffix: true })
            : 'older';

          return (
            <motion.div className="reply__post" key={reply.date}>
              <ProfilePicture
                email={reply.author_id}
                style={{ marginRight: '1rem', flexShrink: 0 }}
              />
              <div className="reply__info">
                <p className="reply__author">{reply.author}</p>
                <p className="reply__content">{reply.content}</p>
                <p className="reply__time">{replyTime}</p>
              </div>
            </motion.div>
          );
        })}
    </>
  );
};

export default Replies;
