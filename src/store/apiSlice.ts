import {
  createApi,
  fakeBaseQuery,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
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

export const jokeApi = createApi({
  reducerPath: 'jokeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
    headers: {
      Accept: 'application/json',
    },
  }),
  endpoints: (builder) => ({
    fetchJoke: builder.query({
      query: () => {
        return {
          url: 'https://icanhazdadjoke.com/',
        };
      },
    }),
  }),
});

export const { useFetchCensusesQuery } = censusesApi;
export const { useFetchJokeQuery } = jokeApi;
