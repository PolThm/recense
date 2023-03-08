import { useEffect, useState } from 'react';

import { useFetchCensusesQuery } from '@/store/apiSlice';
import { Queries } from '@/types/enums';
import { areLocalCensuses } from '@/utils/local-storage-utils';
import { addDelay } from '@/utils/time-utils';

const useLoadCensusesWithDelay = () => {
  const { isLoading, isError: isCensusesError } = useFetchCensusesQuery(
    Queries.Censuses
  );
  const [isLoadingWithDelay, setIsLoadingWithDelay] = useState(isLoading);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (areLocalCensuses()) {
      setIsLoadingWithDelay(false); // no delay if censuses are in local storage
    } else if (isLoading) {
      const delayId = addDelay(() => setIsLoadingWithDelay(false)); // add 500ms delay to avoid flickering
      setTimeoutId(delayId);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isLoading, timeoutId]);

  return { areCensusesLoading: isLoadingWithDelay, isCensusesError };
};

export default useLoadCensusesWithDelay;
