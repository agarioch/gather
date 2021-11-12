import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { postUpvote } from '../services/gather-api';

const usePostUpvote = () => {
  const queryClient = useQueryClient();
  return useMutation((postId: string) => postUpvote(postId), {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });
};

export default usePostUpvote;
