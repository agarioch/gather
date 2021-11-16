import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { postStatus } from '../services/gather-api';

type usePostStatusProps = {
  id: string;
  status: string;
};

const usePostReply = () => {
  const queryClient = useQueryClient();
  return useMutation(({ id, status }: usePostStatusProps) => postStatus(id, status), {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });
};

export default usePostReply;
