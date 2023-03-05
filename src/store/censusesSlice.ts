import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { Census } from '@/types/interfaces';

export interface CensusesState {
  censuses: Census[];
  isLoading: boolean;
}

const initialState: CensusesState = {
  censuses: [],
  isLoading: false,
};

function findCensusIndex(state: CensusesState, id: number) {
  return state.censuses.findIndex((e) => e.id === id);
}

export const censusesSlice = createSlice({
  name: 'censusesStore',
  initialState,
  reducers: {
    setAllCensuses: (state, action: PayloadAction<Census[]>) => {
      state.censuses = action.payload;
    },

    addCensus: (state, action: PayloadAction<Census>) => {
      state.censuses = [...state.censuses, action.payload];
    },

    deleteCensus: (state, action: PayloadAction<number>) => {
      const index = findCensusIndex(state, action.payload);
      state.censuses.splice(index, 1);
    },

    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { addCensus, deleteCensus, setAllCensuses, setIsLoading } =
  censusesSlice.actions;

export default censusesSlice.reducer;
