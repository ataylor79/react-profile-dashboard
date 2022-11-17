export const BASE_URL = '';

const createDataUrl = (base: string, path: string) => `data/${path}`;

export const getTeams = () => createDataUrl(BASE_URL, 'teams.json');
export const getContacts = () => createDataUrl(BASE_URL, 'contacts.json');
export const getInvoices = () => createDataUrl(BASE_URL, 'invoices.json');
