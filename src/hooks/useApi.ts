import { useState, useEffect, useCallback } from 'react';

const useApi = <T>(request: string): [T[], string | null, boolean] => {
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
        setError('Could not load data');
      });
  }, [request]);

  useEffect(() => {
    fetchData();
  }, [request, fetchData]);

  return [result, error, loading];
};

export default useApi;
