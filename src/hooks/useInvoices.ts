import { useMemo } from 'react';
import useApi from './useApi';
import { getInvoices } from '../services/request';

const useInvoices = () => {
  const request = useMemo(() => getInvoices(), []);
  return useApi(request);
};

export default useInvoices;
