import React from 'react';
import { useQuery } from 'react-query';
import { getPost } from '../services/gather-api';
import { Post } from '../types';

const useGetPosts = (postId: string) => {
  return useQuery<Post, Error>(['posts', postId], () => getPost(postId));
};

export default useGetPosts;
