import { useMemo } from 'react';
import useApi from './useApi';
import { getSkills } from '../services/request';

type Skill = {
  skill: string;
  [key: string]: string | number;
};

const useSkills = () => {
  const request = useMemo(() => getSkills(), []);
  return useApi<Skill>(request);
};

export default useSkills;
