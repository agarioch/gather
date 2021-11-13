import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { postResponse } from '../services/gather-api';
import { Response } from '../types';

type usePostReplyProps = {
  id: string;
  response: Response;
};

const usePostResponse = () => {
  const queryClient = useQueryClient();
  return useMutation(({ id, response }: usePostReplyProps) => postResponse(id, response), {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });
};

export default usePostResponse;
