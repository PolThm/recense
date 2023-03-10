import { useEffect, useState } from 'react';

import { useFetchCensusesQuery } from '@/store/apiSlice';
import { Queries } from '@/types/enums';
import { areLocalCensuses } from '@/utils/local-storage-utils';
import { addDelay } from '@/utils/time-utils';

const useLoadCensusesWithDelay = () => {
  const { isLoading, isError } = useFetchCensusesQuery(Queries.Censuses);
  const [isLoadingWithDelay, setIsLoadingWithDelay] = useState(isLoading);

  useEffect(() => {
    if (areLocalCensuses()) {
      setIsLoadingWithDelay(false); // no delay if censuses are in local storage
    } else if (isLoading) {
      addDelay(() => setIsLoadingWithDelay(false)); // add 500ms delay to avoid flickering
    }
  }, [isLoading]);

  return { areCensusesLoading: isLoadingWithDelay, isCensusesError: isError };
};

export default useLoadCensusesWithDelay;
