import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { Census } from '@/types/interfaces';
import { setCensusesToLocalStorage } from '@/utils/local-storage-utils';

export interface CensusesState {
  censuses: Census[];
  isLoading: boolean;
  error: Error | null;
}

const initialState: CensusesState = {
  censuses: [],
  isLoading: false,
  error: null,
};

const findCensusIndex = (state: CensusesState, id: number) => {
  return state.censuses.findIndex((e) => e.id === id);
};

export const censusesSlice = createSlice({
  name: 'censusesStore',
  initialState,
  reducers: {
    setAllCensuses: (state, action: PayloadAction<Census[]>) => {
      state.censuses = action.payload;
    },

    addCensus: (state, action: PayloadAction<Census>) => {
      state.censuses = [...state.censuses, action.payload];
      setCensusesToLocalStorage(state.censuses);
    },

    deleteCensus: (state, action: PayloadAction<number>) => {
      const index = findCensusIndex(state, action.payload);
      state.censuses.splice(index, 1);
      setCensusesToLocalStorage(state.censuses);
    },

    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
  },
});

export const {
  addCensus,
  deleteCensus,
  setAllCensuses,
  setIsLoading,
  setError,
} = censusesSlice.actions;

export default censusesSlice.reducer;
