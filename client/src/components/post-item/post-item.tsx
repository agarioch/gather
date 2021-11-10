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
      <p className="post__body__main--info">
        <i className="fab fa-wpforms"></i> Survey
      </p>
    ) : (
      <p className="post__body__main--info">
        <i className="fas fa-lightbulb"></i> Idea
      </p>
    );

  return (
    <Card type={post.type}>
      <div className="post">
        <div className="post__body">
          <div className="post__body__info">
            <i className="fas fa-chevron-up"></i>
            <h2>14</h2>
          </div>
          <div className="post__body__main">
            {typeBadge}
            <h2>{post.title}</h2>
            <p className="post__body__main--info">{post.author}</p>
          </div>
        </div>
        <div className="post__actions">
          <span>
            <i className="fas fa-chevron-down"></i> Comments
          </span>
          <span>Reply</span>
        </div>
      </div>
    </Card>
  );
};

export default PostItem;
