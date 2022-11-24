import { useMemo } from 'react';
import useApi from './useApi';
import { getContacts } from '../services/request';

type Contact = {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  registrarId: number;
};

const useContacts = () => {
  const request = useMemo(() => getContacts(), []);
  return useApi<Contact>(request);
};

export default useContacts;
