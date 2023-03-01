import { useEffect, useState } from 'react';

type FetchState = {
  loading: boolean;
  data: any;
  error: string | null;
};

const headers: HeadersInit = {
  Accept: 'application/json',
};

const useFetch = (url: string) => {
  const [state, setState] = useState<FetchState>({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, { headers });

        if (!response.ok) {
          throw new Error(
            `Fetch error: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        setState({ loading: false, data, error: null });
      } catch (error) {
        setState({
          loading: false,
          data: null,
          error: (error as Error).message,
        });
      }
    };

    fetchData();
  }, [url]);

  return state;
};

export default useFetch;
