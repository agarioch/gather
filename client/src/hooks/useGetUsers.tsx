import React from 'react';
import { useQuery } from 'react-query';
import { getUsers } from '../services/gather-api';

const useGetUsers = () => {
  return useQuery('users', getUsers);
};

export default useGetUsers;
