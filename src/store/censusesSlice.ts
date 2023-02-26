import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { Census } from '@/types/interfaces';

export interface CensusesState {
  censuses: Census[];
}

const initialState: CensusesState = {
  censuses: [],
};

function findCensusIndex(state: CensusesState, id: number) {
  return state.censuses.findIndex((e) => e.id === id);
}

export const censusesSlice = createSlice({
  name: 'censusesStore',
  initialState,
  reducers: {
    fetchCensuses: (state, action: PayloadAction<Census[]>) => {
      state.censuses = action.payload;
    },

    addCensus: (state, action: PayloadAction<Census>) => {
      state.censuses = [...state.censuses, action.payload];
    },

    deleteCensus: (state, action: PayloadAction<number>) => {
      const index = findCensusIndex(state, action.payload);
      state.censuses.splice(index, 1);
    },
  },
});

export const { addCensus, deleteCensus, fetchCensuses } =
  censusesSlice.actions;

export default censusesSlice.reducer;
