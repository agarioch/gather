import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { postPost } from '../services/gather-api';
import { PostReq } from '../types';

type usePostPostProps = {
  post: PostReq;
};

const usePostReply = () => {
  const queryClient = useQueryClient();
  return useMutation(({ post }: usePostPostProps) => postPost(post), {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });
};

export default usePostReply;
