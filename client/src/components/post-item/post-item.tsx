import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';
import { Post } from '../../types';
import Card from '../card/card';
import './post-item.css';
import { Link } from 'react-router-dom';

type PostItemProps = {
  post: Post;
};

const PostItem = ({ post }: PostItemProps) => {
  const [expanded, setExpanded] = useState(false);

  const expandIconClass = classNames([
    'fas',
    { 'fa-chevron-down': expanded },
    { 'fa-chevron-up': !expanded },
  ]);
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

  return (
    <Card type={post.type}>
      <div className="post__wrapper">
        <div className="post__main">
          <div className="post__votes">
            <i className="fas fa-chevron-up"></i>
            <h2>{post.votes}</h2>
          </div>
          <div className="post__details">
            {typeIconClass}
            <Link to={`/survey/${post._id}`}>
              <h2 className="post__details--title">{post.title}</h2>
            </Link>
            {post.content && <p>{post.content}</p>}
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
              'No Replies'
            )}
          </span>
          <button className="post__actions--btn">
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
