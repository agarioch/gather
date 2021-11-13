import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';
import { Post } from '../../types';
import Card from '../card/card';
import './post-item.css';
import { Link } from 'react-router-dom';
import usePostUpvote from '../../hooks/usePostUpvote';
import ReplyForm from '../reply-form/reply-form';

type PostItemProps = {
  post: Post;
};

const PostItem = ({ post }: PostItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const [replying, setReplying] = useState(false);
  const { mutate } = usePostUpvote();

  const handleReply = () => {
    setExpanded(true);
    setReplying(!replying);
  };
  const handleCancelReply = () => {
    setExpanded(true);
    setReplying(false);
  };
  const handleSubmitReply = () => {
    setReplying(false);
  };

  // CSS classes and Framer Motion Animation variants
  const typeIconClass =
    post.type === 'survey' ? (
      <p className="post__details--info">
        <i className="fab fa-wpforms"></i> Survey
      </p>
    ) : (
      <p className="post__details--info">
        <i className="fas fa-lightbulb"></i> Idea
      </p>
    );
  const expandIconClass = classNames([
    'fas',
    { 'fa-chevron-down': expanded },
    { 'fa-chevron-up': !expanded },
  ]);
  const upvoteIcon = {
    hover: { y: '-5px', transition: { yoyo: Infinity } },
    tap: { scale: 1 },
  };
  const upvoteButton = {
    hover: {
      scale: 1.05,
      color: 'var(--success-dark)',
      backgroundColor: 'var(--success-bg)',
    },
  };
  const upvoteCount = {
    tap: { y: '100%', opactity: 0 },
  };

  return (
    <Card type={post.type}>
      <div className="post__wrapper">
        <div className="post__main">
          <motion.div whileHover="hover" whileTap="tap" className="post__votes--wrapper">
            <motion.button
              className="post__votes"
              onClick={(e) => mutate(post._id)}
              variants={upvoteButton}
            >
              <motion.i className="fas fa-chevron-up" variants={upvoteIcon}></motion.i>
              <motion.h2 variants={upvoteCount}>{post.votes}</motion.h2>
            </motion.button>
          </motion.div>
          <div className="post__details">
            {typeIconClass}
            <Link to={`/survey/${post._id}`}>
              <h2 className="post__details--title">{post.title}</h2>
              {post.content && <p>{post.content}</p>}
            </Link>
            <p className="post__details--info">{post.author}</p>
          </div>
        </div>

        <div className="post__actions">
          <span>
            {post.replies > 0 ? (
              <button
                className="post__actions--btn"
                onClick={() => setExpanded(expanded ? false : true)}
              >
                <i className={expandIconClass}></i> Show {post.replies} replies
              </button>
            ) : (
              <p className="post__actions--none">No Replies</p>
            )}
          </span>
          <button className="post__actions--btn" onClick={handleReply}>
            <i className="fas fa-comment"></i> Reply
          </button>
        </div>
        <AnimatePresence>
          {expanded && (
            <motion.div
              className="post__replies"
              initial={{ y: '-20%', opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {replying && (
                <ReplyForm
                  postId={post._id}
                  handleCancel={handleCancelReply}
                  handleReply={handleSubmitReply}
                />
              )}
              <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
};

export default PostItem;
