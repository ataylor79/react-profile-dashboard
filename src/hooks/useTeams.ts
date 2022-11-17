import { useMemo } from 'react';
import useApi from './useApi';
import { getTeams } from '../services/request';

const useTeams = () => {
  const request = useMemo(() => getTeams(), []);
  return useApi(request);
};

export default useTeams;
