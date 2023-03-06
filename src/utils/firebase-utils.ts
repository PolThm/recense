import { Dispatch } from '@reduxjs/toolkit';
import { child, get, ref } from 'firebase/database';

import { setAllCensuses, setError, setIsLoading } from '@/store/censusesSlice';

import { database } from '../../firebase';

// This will be replaced by RTK Query in the future
export const getFirebaseDbAndSetAllCensuses = async (dispatch: Dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const snapshot = await get(child(ref(database), 'censuses'));
    if (snapshot.exists()) dispatch(setAllCensuses(snapshot.val()));
  } catch (error) {
    dispatch(setError(error as Error));
    console.error(error);
  } finally {
    setTimeout(() => dispatch(setIsLoading(false)), 500); // 500ms delay to avoid flickering
  }
};
