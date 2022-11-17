import { useState, useEffect } from 'react';

const useApi = (request: string): [any[], string | null] => {
  const [result, setResults] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(request)
      .then(async (response) => {
        if (!response.ok) {
          setError(await response.text());
          return;
        }
        const result = await response.json();
        setResults(result.data);
        setError(null);
      })
      .catch((err) => setError(err));
  }, [request]);

  return [result, error];
};

export default useApi;
