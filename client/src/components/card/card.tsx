import React from 'react';
import classNames from 'classnames';
import './card.css';

interface Props {
  key?: string;
  children?: React.ReactNode;
  type?: string;
}

const Card: React.FC<Props> = ({ children, type }) => {
  const btnClass = classNames({
    card: true,
    'card--highlight': type === 'survey',
  });
  return <div className={btnClass}>{children}</div>;
};

export default Card;
