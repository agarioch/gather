import React, { useState, useEffect } from 'react';
import './feed.css';
import { getPosts } from '../../services/gather-api';

const Feed: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((res) => setPosts(res));
  }, []);

  const cards = posts.map((post) => (
    <div>
      <pre>{JSON.stringify(post)}</pre>
    </div>
  ));

  return (
    <div className="posts">
      <p>Latest posts</p>
      {cards}
    </div>
  );
};

export default Feed;
