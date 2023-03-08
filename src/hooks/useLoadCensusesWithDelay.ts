import { useEffect, useState } from 'react';

import { useFetchCensusesQuery } from '@/store/apiSlice';
import { Queries } from '@/types/enums';
import { areLocalCensuses } from '@/utils/local-storage-utils';

const useLoadCensusesWithDelay = () => {
  const { isLoading, isError: isCensusesError } = useFetchCensusesQuery(
    Queries.Censuses
  );
  const [isLoadingWithDelay, setIsLoadingWithDelay] = useState(isLoading);

  useEffect(() => {
    if (areLocalCensuses()) {
      setIsLoadingWithDelay(false); // no delay if censuses are in local storage
    } else if (isLoading) {
      setTimeout(() => setIsLoadingWithDelay(false), 500); // 500ms delay to avoid flickering
    }
  }, [isLoading]);

  return { areCensusesLoading: isLoadingWithDelay, isCensusesError };
};

export default useLoadCensusesWithDelay;
