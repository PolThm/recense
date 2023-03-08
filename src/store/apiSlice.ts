import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { child, get, ref } from 'firebase/database';

import { database } from '../../firebase';

export const censusesApi = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    fetchCensuses: builder.query({
      async queryFn() {
        try {
          const censusesData = await get(child(ref(database), 'censuses'));
          return { data: censusesData.val() };
        } catch (error) {
          console.error(error);
          return { error };
        }
      },
    }),
  }),
});

export const { useFetchCensusesQuery } = censusesApi;
