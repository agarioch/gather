import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './feed.css';
import useGetPosts from '../../hooks/useGetPosts';
import Button from '../../components/button/button';
import PostItem from '../../components/post-item/post-item';
import Loader from '../../components/loader/loader';
import PostForm from '../../components/post-form/post-form';
import { Post } from '../../types';
import NavButton from '../../components/button/nav-button';

const Feed: React.FC = () => {
  const [posting, setPosting] = useState(false);
  const [sortType, setSortType] = useState('votes');
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
      </section>
    </main>
  );
};

export default Feed;
