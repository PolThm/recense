import { LocalStorageKeys } from '@/types/enums';
import { Census } from '@/types/interfaces';

const { Censuses, LastUpdate } = LocalStorageKeys;

const clearLocalStorageAfterOneWeek = () => {
  const oneWeekAgo = 1000 * 60 * 60 * 24 * 7;
  const lastUpdate = localStorage.getItem(LastUpdate);
  if (lastUpdate) {
    const lastUpdateDate = new Date(JSON.parse(lastUpdate));
    const currentDate = new Date();
    if (currentDate.getTime() - lastUpdateDate.getTime() > oneWeekAgo) {
      localStorage.clear();
    }
  }
};

export const getCensusesFromLocalStorage = (): Census[] => {
  clearLocalStorageAfterOneWeek();
  const censuses = localStorage.getItem(Censuses);
  return censuses ? JSON.parse(censuses) : '';
};

export const setCensusesToLocalStorage = (censuses: Census[]) => {
  localStorage.setItem(Censuses, JSON.stringify(censuses));
  localStorage.setItem(LastUpdate, JSON.stringify(Date.now()));
};
