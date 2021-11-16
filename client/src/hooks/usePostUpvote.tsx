import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { isStringLiteralLike } from 'typescript';
import { postUpvote } from '../services/gather-api';

type usePostUpvoteProps = {
  postId: string;
  email: string;
};

const usePostUpvote = () => {
  const queryClient = useQueryClient();
  return useMutation(({ postId, email }: usePostUpvoteProps) => postUpvote(postId, email), {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
      queryClient.invalidateQueries('users');
    },
  });
};

export default usePostUpvote;
