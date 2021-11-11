import React, { useState, useEffect } from 'react';
import './feed.css';
import { getPosts } from '../../services/gather-api';
import { Post } from '../../types';
import Button from '../../components/button/button';
import PostItem from '../../components/post-item/post-item';

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((res) => setPosts(res));
  }, []);
  const cards = posts.map((post) => <PostItem key={post._id} post={post} />);

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
