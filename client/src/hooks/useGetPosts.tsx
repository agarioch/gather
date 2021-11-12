import React from 'react';
import { useQuery } from 'react-query';
import { getPosts } from '../services/gather-api';
import { Post } from '../types';

const useGetPosts = () => {
  return useQuery<Post[], Error>('posts', getPosts);
};

export default useGetPosts;
