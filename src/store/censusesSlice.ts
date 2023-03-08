import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { Census } from '@/types/interfaces';
import { setCensusesToLocalStorage } from '@/utils/local-storage-utils';

export interface CensusesState {
  censuses: Census[];
}

const initialState: CensusesState = {
  censuses: [],
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
  },
});

export const { addCensus, deleteCensus, setAllCensuses } =
  censusesSlice.actions;

export default censusesSlice.reducer;
