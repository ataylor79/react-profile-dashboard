import { useMemo } from 'react';
import useApi from './useApi';
import { getInvoices } from '../services/request';

type Invoice = {
  id: number;
  name: string;
  email: string;
  cost: number;
  phone: string;
  date: string;
};

const useInvoices = () => {
  const request = useMemo(() => getInvoices(), []);
  return useApi<Invoice>(request);
};

export default useInvoices;
