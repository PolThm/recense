import { vi } from 'vitest';

import CensusMock from '@/__tests__/mocks/CensusMock';
import {
  getCensusesFromLocalStorage,
  setCensusesToLocalStorage,
} from '@/utils/local-storage-utils';

describe('setCensusesToLocalStorage', () => {
  it('should set censuses and lastUpdate (Date.now()) to local storage', () => {
    const spySetItem = vi.spyOn(Storage.prototype, 'setItem');
    const censuses = [CensusMock];
    setCensusesToLocalStorage(censuses);
    expect(spySetItem).toHaveBeenCalledWith(
      'censuses',
      JSON.stringify(censuses)
    );
    expect(spySetItem).toHaveBeenCalledWith('lastUpdate', expect.any(String));
    spySetItem.mockRestore();
  });
});

describe('getCensusesFromLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('should return censuses from local storage', () => {
    const spyGetItem = vi.spyOn(Storage.prototype, 'getItem');
    const censuses = [CensusMock];
    setCensusesToLocalStorage(censuses);
    expect(getCensusesFromLocalStorage()).toEqual(censuses);
    expect(spyGetItem).toHaveBeenCalledWith('censuses');
  });

  it('should return empty string if censuses are not in local storage (start with clear storage)', () => {
    expect(getCensusesFromLocalStorage()).toEqual('');
  });

  it('should clear local storage if last update is older than one week', () => {
    const spyGetItem = vi.spyOn(Storage.prototype, 'getItem');
    const spyClear = vi.spyOn(Storage.prototype, 'clear');
    const censuses = [CensusMock];
    setCensusesToLocalStorage(censuses);
    const oneWeekAgo = 1000 * 60 * 60 * 24 * 7;
    const lastUpdate = Date.now() - oneWeekAgo - 1;
    spyGetItem.mockReturnValueOnce(JSON.stringify(lastUpdate));
    expect(getCensusesFromLocalStorage()).toEqual('');
    expect(spyClear).toHaveBeenCalled();
  });
});
