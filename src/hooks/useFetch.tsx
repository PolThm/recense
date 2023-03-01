import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [apiData, setApiData] = useState<any>(null);
  const [isApiLoading, setIsApiLoading] = useState(true);
  const [apiError, setApiError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: { Accept: 'application/json' },
        });
        const json = await response.json();
        setApiData(json);
      } catch (err) {
        setApiError(err as Error);
      } finally {
        setIsApiLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { apiData, isApiLoading, apiError };
};

export default useFetch;
