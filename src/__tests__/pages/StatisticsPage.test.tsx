import { screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach } from 'vitest';

import CensusMock from '@/__tests__/_mocks/CensusMock';
import StatisticsPage from '@/pages/StatisticsPage';
import { setupStore } from '@/store';
import { setAllCensuses } from '@/store/censusesSlice';
import { renderWithProviders } from '@/utils/tests-utils';

describe('StatisticsPage', () => {
  let store: ReturnType<typeof setupStore>;

  beforeEach(() => {
    store = setupStore();
    store.dispatch(setAllCensuses([CensusMock]));
  });

  it('should render the title', () => {
    renderWithProviders(<StatisticsPage />, { store });
    expect(screen.getByText('Statistics Globales')).toBeInTheDocument();
  });

  it('should render the subtitle', () => {
    renderWithProviders(<StatisticsPage />, { store });
    expect(
      screen.getByText('Voici quelques chiffres tirés de nos recensements')
    ).toBeInTheDocument();
  });

  it('should render the description', () => {
    renderWithProviders(<StatisticsPage />, { store });
    expect(
      screen.getByText(
        'Chaque résultat représente la moyenne des données recueillies (arrondies)'
      )
    ).toBeInTheDocument();
  });

  it('should render the CircularProgress component if it is loading', () => {
    renderWithProviders(<StatisticsPage />, { store });
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('should render the age average card if it is not loading and there are censuses', async () => {
    renderWithProviders(<StatisticsPage />, { store });
    await waitFor(() => expect(screen.getByText('Âge')).toBeInTheDocument());
  });

  it('should render the income average card if it is not loading and there are censuses', async () => {
    renderWithProviders(<StatisticsPage />, { store });
    await waitFor(() =>
      expect(screen.getByText('Revenu annuel')).toBeInTheDocument()
    );
  });

  it('should render the residents average card if it is not loading and there are censuses', async () => {
    renderWithProviders(<StatisticsPage />, { store });
    await waitFor(() =>
      expect(screen.getByText('Résident(s)')).toBeInTheDocument()
    );
  });

  it('should render the empty censuses warning if it is not loading and there are no censuses', async () => {
    store.dispatch(setAllCensuses([]));
    renderWithProviders(
      <MemoryRouter>
        <StatisticsPage />
      </MemoryRouter>,
      { store }
    );
    await waitFor(() =>
      expect(screen.getByTestId('empty-censuses-warning')).toBeInTheDocument()
    );
  });
});
