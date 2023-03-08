import type { PreloadedState } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { censusesApi, jokeApi } from '@/store/apiSlice';
import censusesReducer from '@/store/censusesSlice';

// Create the root reducer separately, so we can extract the RootState type
const rootReducer = combineReducers({
  censusesStore: censusesReducer,
  [censusesApi.reducerPath]: censusesApi.reducer,
  [jokeApi.reducerPath]: jokeApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(censusesApi.middleware, jokeApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
