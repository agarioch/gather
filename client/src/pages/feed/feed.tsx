import React, { useState, useEffect } from 'react';
import './feed.css';
import { getPosts } from '../../services/gather-api';

const Feed: React.FC = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getPosts().then((res) => setPosts(res));
  }, []);

  return (
    <div className="posts">
      <p>Feed is working.</p>
      <pre>{posts}</pre>
    </div>
  );
};

export default Feed;
