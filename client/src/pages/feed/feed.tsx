import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth0 } from '@auth0/auth0-react';
import './feed.css';
import useGetPosts from '../../hooks/useGetPosts';
import Button from '../../components/button/button';
import PostItem from '../../components/post-item/post-item';
import Loader from '../../components/loader/loader';
import PostForm from '../../components/post-form/post-form';
import { Post } from '../../types';
import NavButton from '../../components/button/nav-button';
import { UserContext } from '../../App';

const Feed: React.FC = () => {
  const [posting, setPosting] = useState(false);
  const [sortType, setSortType] = useState('votes');
  const { user } = useAuth0();
  const postsQuery = useGetPosts();

  const handleCancelPosting = () => setPosting(false);
  const sortbyValue = (a: Post, b: Post) => b[sortType] - a[sortType];
  const sorter = sortType === 'default' ? (a: Post, b: Post) => -1 : sortbyValue;

  const cards = postsQuery.isSuccess ? (
    postsQuery.data.sort(sorter).map((post) => <PostItem key={post._id} post={post} />)
  ) : (
    <Loader />
  );

  return (
    <main className="feed">
      <section className="posts">
        <AnimatePresence>
          {posting && <PostForm handleCancel={handleCancelPosting} />}
        </AnimatePresence>
        {cards}
      </section>
      <section className="sidebar">
        <Button
          onClick={() => {
            setPosting(!posting);
          }}
          style={{ width: '8rem' }}
        >
          {posting ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
          &nbsp; New Post
        </Button>
        <NavButton path="/survey" type="secondary" style={{ width: '8rem', marginTop: '1rem' }}>
          New Survey
        </NavButton>
        <div className="sidebar__actions">
          <p>Sort order</p>
          <ul className="sidebar__list fa-ul">
            <li className="sidebar__list-item">
              <span className="fa-li">
                <i className="fas fa-sort-down"></i>
              </span>
              <Button
                type="tertiary"
                onClick={() => setSortType('default')}
                style={{ color: 'var(--grey-700)' }}
              >
                Post Date
              </Button>
            </li>
            <li className="sidebar__list-item">
              <span className="fa-li">
                <i className="fas fa-sort-down"></i>
              </span>
              <Button
                type="tertiary"
                onClick={() => setSortType('votes')}
                style={{ color: 'var(--grey-700)' }}
              >
                Votes
              </Button>
            </li>
          </ul>
        </div>
        {user && user.email && (
          <div className="sidebar__actions">
            <p>Remaining votes</p>
            <UserContext.Consumer>
              {(users) => (
                <AnimatePresence>
                  <motion.h3
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '100%', opacity: 0 }}
                    className="sidebar__votes"
                  >
                    {users[user.email || ''].votes}
                  </motion.h3>
                  <p className="sidebar__info">
                    <i
                      className="fas fa-info fa-sm fa-pull-left"
                      style={{ marginTop: '.3rem', marginRight: '.3rem' }}
                    ></i>
                    Each team member has 10 votes per week to vote for the ideas they like
                  </p>
                  <p className="sidebar__info">
                    e.g. vote for 10 ideas once or vote for one idea 10 times
                  </p>
                </AnimatePresence>
              )}
            </UserContext.Consumer>
          </div>
        )}
      </section>
    </main>
  );
};

export default Feed;
