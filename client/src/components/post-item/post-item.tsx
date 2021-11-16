import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';
import { formatDistanceToNow, parseISO, isValid } from 'date-fns';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import { Post } from '../../types';
import Card from '../card/card';
import './post-item.css';
import { Link } from 'react-router-dom';
import usePostUpvote from '../../hooks/usePostUpvote';
import usePostStatus from '../../hooks/usePostStatus';
import ReplyForm from '../reply-form/reply-form';
import Replies from '../replies/replies';
import { useAuth0 } from '@auth0/auth0-react';
import { ProfilePicture } from '../profile/profile-pictures';
import { UserContext } from '../../App';
import useDeletePost from '../../hooks/useDeletePost';

const SURVEY = 'survey';

type PostItemProps = {
  post: Post;
};

const PostItem = ({ post }: PostItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const [replying, setReplying] = useState(false);
  const [actionsOpen, setActionsOpen] = useState(false);
  const { mutate } = usePostUpvote();
  const postStatus = usePostStatus();
  const postDelete = useDeletePost();
  const { user } = useAuth0();
  const userData = useContext(UserContext);

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
  // Check if user has actions for the post (they are the author or a leader)
  const userRole = user && userData[user.email || ''].role;
  const actionsAvailable = post.author_id === user?.email || userRole === 'leader';

  return (
    <Card type={post.type}>
      <div className="post__wrapper">
        <div className="post__main">
          {/* //!  UPVOTE */}
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

          {/* //! HEADER/BADGES */}
          <div className="post__details">
            <div className="post__badges">
              {typeIconClass}
              {responded && (
                <p className="post__badge post__badge--success">
                  <i className="fas fa-check"></i> &nbsp; you responded
                </p>
              )}

              {post.type !== SURVEY && actionsAvailable && (
                <span style={{ display: 'flex' }}>
                  {post.status &&
                    (post.status === 'accepted' ? (
                      <span className="post__badge post__badge--success">Accepted</span>
                    ) : (
                      <span className="post__badge post__badge--warn">Closed</span>
                    ))}
                  <button
                    className="post__btn post__btn--icon"
                    onClick={() => setActionsOpen(true)}
                    style={{ marginLeft: '1rem' }}
                  >
                    <i className="fas fa-ellipsis-v" aria-label="options menu"></i>
                  </button>
                  <DialogOverlay
                    as="div"
                    isOpen={actionsOpen}
                    onDismiss={() => setActionsOpen(false)}
                  >
                    <DialogContent as="div" aria-label="modal actions">
                      <motion.button
                        className="modal__close-button"
                        onClick={() => setActionsOpen(false)}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: 'var(--error-bg)',
                          color: 'var(--error-dark)',
                        }}
                      >
                        <span aria-hidden>
                          <i className="fas fa-times"></i>
                        </span>
                      </motion.button>
                      <div className="modal__actions">
                        <div aria-label="button-group">
                          {actionsAvailable && (
                            <>
                              <button
                                className="post__btn post__btn--modal post__btn--success"
                                onClick={(e) => {
                                  postStatus.mutate({ id: post._id, status: 'accepted' });
                                  setActionsOpen(false);
                                }}
                              >
                                <i className="fas fa-check-circle fa-sm"></i>&nbsp; Flag Idea as
                                Accepted
                              </button>
                              <button
                                className="post__btn post__btn--modal post__btn--error"
                                onClick={(e) => {
                                  postStatus.mutate({ id: post._id, status: 'closed' });
                                  setActionsOpen(false);
                                }}
                              >
                                <i className="fas fa-times-circle fa-sm"></i>&nbsp; Flag Idea as
                                Closed
                              </button>
                            </>
                          )}
                          <button
                            className="post__btn post__btn--modal post__btn--error"
                            onClick={(e) => {
                              console.log('DELETING');
                              postDelete.mutate(post._id);
                              setActionsOpen(false);
                            }}
                          >
                            <i className="fas fa-trash fa-sm"></i>&nbsp; Delete Post
                          </button>
                        </div>
                      </div>
                    </DialogContent>
                  </DialogOverlay>
                </span>
              )}
            </div>

            {/* MAIN POST */}
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

        {/* //! ACTIONS */}
        <div className="post__actions">
          <span>
            {post.replies.length > 0 ? (
              <button className="post__btn" onClick={() => setExpanded(expanded ? false : true)}>
                <i className={expandIconClass}></i> Show {post.replies.length} replies
              </button>
            ) : (
              <p className="post__actions--none">No Replies</p>
            )}
          </span>

          {post.type === SURVEY && (
            <span>
              <Link to={`/survey/${post._id}/responses`}>
                <button className="post__btn">View responses</button>
              </Link>
            </span>
          )}
          <button className="post__btn" onClick={handleReply}>
            <i className="fas fa-comment"></i> Reply
          </button>
        </div>

        {/* //! REPLIES */}
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
