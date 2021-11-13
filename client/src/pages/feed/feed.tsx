import React from 'react';
import './feed.css';
import useGetPosts from '../../hooks/useGetPosts';
import Button from '../../components/button/button';
import PostItem from '../../components/post-item/post-item';
import Loader from '../../components/loader/loader';

const Feed: React.FC = () => {
  const postsQuery = useGetPosts();

  const cards = postsQuery.isSuccess ? (
    postsQuery.data
      .sort((a, b) => b.votes - a.votes)
      .map((post) => <PostItem key={post._id} post={post} />)
  ) : (
    <Loader />
  );

  return (
    <main className="feed">
      <div className="posts">{cards}</div>
      <div className="sidebar">
        <Button onClick={() => {}}>+ New Post</Button>
      </div>
    </main>
  );
};

export default Feed;
