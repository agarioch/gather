import React from 'react';
import { useQuery } from 'react-query';
import { getUsers } from '../services/gather-api';

const useGetUsers = () => {
  console.log();
  return useQuery('users', getUsers);
};

export default useGetUsers;
