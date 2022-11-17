import { useMemo } from 'react';
import useApi from './useApi';
import { getContacts } from '../services/request';

const useContacts = () => {
  const request = useMemo(() => getContacts(), []);
  return useApi(request);
};

export default useContacts;
