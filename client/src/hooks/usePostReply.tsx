import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { postReply } from '../services/gather-api';
import { Reply } from '../types';

type usePostReplyProps = {
  id: string;
  reply: Reply;
};

const usePostReply = () => {
  const queryClient = useQueryClient();
  return useMutation(({ id, reply }: usePostReplyProps) => postReply(id, reply), {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });
};

export default usePostReply;
