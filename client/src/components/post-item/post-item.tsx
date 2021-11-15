import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';
import { formatDistanceToNow, parseISO, isValid } from 'date-fns';
import { Post } from '../../types';
import Card from '../card/card';
import './post-item.css';
import { Link } from 'react-router-dom';
import usePostUpvote from '../../hooks/usePostUpvote';
import ReplyForm from '../reply-form/reply-form';
import Replies from '../replies/replies';
import { useAuth0 } from '@auth0/auth0-react';
import { ProfilePicture } from '../profile/profile-pictures';

const SURVEY = 'survey';

type PostItemProps = {
  post: Post;
};

const PostItem = ({ post }: PostItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const [replying, setReplying] = useState(false);
  const { mutate } = usePostUpvote();
  const { user } = useAuth0();

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
  const responded: boolean = post?.respondees?.includes(user?.email || 'no') || false;
  // CSS classes and Framer Motion Animation variants
  const typeIconClass =
    post.type === SURVEY ? (
      <p className="post__badge-type">
        <i className="fab fa-wpforms"></i>&nbsp;&nbsp; Survey
      </p>
    ) : (
      <p className="post__badge-type">
        <i className="fas fa-lightbulb"></i>&nbsp;&nbsp; Idea
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
            <div className="post__badges">
              {typeIconClass}
              {responded && (
                <p className="post__badge-success">
                  <i className="fas fa-check"></i> &nbsp; you responded
                </p>
              )}
            </div>
            <Link to={`/survey/${post._id}${responded ? '/responses' : ''}`}>
              <h2 className="post__details--title">{post.title}</h2>
              {post.content && <p>{post.content} </p>}
            </Link>
            <div className="post__info">
              <div className="post__profile">
                <ProfilePicture
                  email={post.author_id}
                  style={{ width: '2.5rem', height: '2.5rem', marginRight: '.5rem' }}
                />
              </div>
              <p className="post__into-text">
                {post.author}
                {post.date && isValid(parseISO(post.date)) ? (
                  <span className="post__details--time">
                    {formatDistanceToNow(parseISO(post.date), { addSuffix: true })}
                  </span>
                ) : (
                  <span className="post__details--time"> 'no date'</span>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="post__actions">
          <span>
            {post.replies.length > 0 ? (
              <button
                className="post__actions--btn"
                onClick={() => setExpanded(expanded ? false : true)}
              >
                <i className={expandIconClass}></i> Show {post.replies.length} replies
              </button>
            ) : (
              <p className="post__actions--none">No Replies</p>
            )}
          </span>
          {post.type === SURVEY && (
            <span>
              <Link to={`/survey/${post._id}/responses`}>
                <button className="post__actions--btn">View responses</button>
              </Link>
            </span>
          )}

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
              <Replies replies={post.replies} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
};

export default PostItem;
