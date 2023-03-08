import { useEffect, useState } from 'react';

import { useFetchCensusesQuery } from '@/store/apiSlice';
import { LocalStorageKeys, Queries } from '@/types/enums';

const useLoadWithDelay = () => {
  const { isLoading, isError: isCensusesError } = useFetchCensusesQuery(
    Queries.Censuses
  );
  const [isLoadingWithDelay, setIsLoadingWithDelay] = useState(isLoading);

  useEffect(() => {
    if (localStorage.getItem(LocalStorageKeys.Censuses))
      setIsLoadingWithDelay(false); // if there is no data in local storage, stop loading immediately

    if (isLoading) setTimeout(() => setIsLoadingWithDelay(false), 500); // 500ms delay to avoid flickering
  }, [isLoading]);

  return { isLoadingWithDelay, isCensusesError };
};

export default useLoadWithDelay;
