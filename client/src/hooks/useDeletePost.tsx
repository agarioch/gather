import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { deletePost } from '../services/gather-api';

const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation((postId: string) => deletePost(postId), {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });
};

export default useDeletePost;
