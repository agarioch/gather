import React from 'react';
import { useQuery } from 'react-query';
import { getResponses } from '../services/gather-api';
import { Post } from '../types';

const useGetResponses = () => {
  return useQuery<Post[], Error>('responses', getResponses);
};

export default useGetResponses;
