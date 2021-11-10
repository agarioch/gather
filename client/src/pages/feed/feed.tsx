import React, { useState, useEffect } from 'react';
import './feed.css';
import { getPosts } from '../../services/gather-api';
import { Post } from '../../types';
import Button from '../../components/button/button';
import Card from '../../components/card/card';
import PostItem from '../../components/post-item/post-item';

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((res) => setPosts(res));
  }, []);

  const cards = posts.map((post) => <PostItem key={post._id} post={post} />);

  return (
    <main className="feed">
      <div className="posts">
        <p>Latest posts</p>
        {cards}
      </div>
      <div className="sidebar">
        <Button onClick={() => {}}>+ New Post</Button>
      </div>
    </main>
  );
};

export default Feed;
