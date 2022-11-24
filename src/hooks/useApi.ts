import { useState, useEffect, useCallback } from 'react';

const useApi = (request: string): [boolean, any[], string | null] => {
  const [loading, setLoading] = useState(false);
  const [result, setResults] = useState([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(() => {
    setLoading(true);
    fetch(request)
      .then(async (response) => {
        if (!response.ok) {
          setError(await response.text());
          return;
        }
        const result = await response.json();
        setResults(result.data);
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [request]);

  useEffect(() => {
    fetchData();
  }, [request, fetchData]);

  return [loading, result, error];
};

export default useApi;
