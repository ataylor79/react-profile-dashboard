import { useMemo } from 'react';
import useApi from './useApi';
import { getTeams } from '../services/request';

type Team = {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  access: string;
};

const useTeams = () => {
  const request = useMemo(() => getTeams(), []);
  return useApi<Team>(request);
};

export default useTeams;
