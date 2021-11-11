import React from 'react';
import { Post } from '../../types';
import Card from '../card/card';
import './post-item.css';

type PostItemProps = {
  post: Post;
};

const PostItem = ({ post }: PostItemProps) => {
  const typeBadge =
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
            <h2>14</h2>
          </div>
          <div className="post__details">
            {typeBadge}
            <h2 className="post__details--title">{post.title}</h2>
            <p className="post__details--info">{post.author}</p>
          </div>
        </div>
        <div className="post__actions">
          <span>
            <i className="fas fa-chevron-down"></i> Comments
          </span>
          <button className="post__actions--btn">
            <i className="fas fa-comment"></i> Reply
          </button>
        </div>
      </div>
    </Card>
  );
};

export default PostItem;
