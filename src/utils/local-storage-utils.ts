import { LocalStorageKeys } from '@/types/enums';

export const clearLocalStorageAfterOneWeek = () => {
  const oneWeekAgo = 1000 * 60 * 60 * 24 * 7;
  const lastUpdate = localStorage.getItem(LocalStorageKeys.LastUpdate);
  if (lastUpdate) {
    const lastUpdateDate = new Date(JSON.parse(lastUpdate));
    const currentDate = new Date();
    if (currentDate.getTime() - lastUpdateDate.getTime() > oneWeekAgo) {
      localStorage.clear();
    }
  }
};
