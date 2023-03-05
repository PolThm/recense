import { screen } from '@testing-library/react';

import CensusMock from '@/__tests__/mocks/CensusMock';
import StatisticsPage from '@/pages/StatisticsPage';
import { setupStore } from '@/store';
import { setAllCensuses } from '@/store/censusesSlice';
import { renderWithProviders } from '@/utils/tests-utils';

describe('StatisticsPage', () => {
  const store = setupStore();
  store.dispatch(setAllCensuses([CensusMock]));

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

  it('should render the age average card', () => {
    renderWithProviders(<StatisticsPage />, { store });
    expect(screen.getByText('Âge')).toBeInTheDocument();
  });

  it('should render the income average card', () => {
    renderWithProviders(<StatisticsPage />, { store });
    expect(screen.getByText('Revenu annuel')).toBeInTheDocument();
  });

  it('should render the residents average card', () => {
    renderWithProviders(<StatisticsPage />, { store });
    expect(screen.getByText('Résidents')).toBeInTheDocument();
  });
});
