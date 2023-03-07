import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import CensusMock from '@/__tests__/mocks/CensusMock';
import EmptyCensusesWarning from '@/components/shared/EmptyCensusesWarning';
import { setupStore } from '@/store';
import { setError } from '@/store/censusesSlice';
import { renderWithProviders } from '@/utils/tests-utils';

describe('EmptyCensusesWarning', () => {
  const store = setupStore();

  it('should render the info warning message if censuses are empty and there is NO error', () => {
    renderWithProviders(
      <MemoryRouter>
        <EmptyCensusesWarning censuses={[]} />
      </MemoryRouter>,
      { store }
    );
    expect(
      screen.getByText("Vous n'avez pas encore d'archives")
    ).toBeInTheDocument();
  });

  it('should render the new census redirection button if censuses are empty and there is NO error', () => {
    renderWithProviders(
      <MemoryRouter>
        <EmptyCensusesWarning censuses={[]} />
      </MemoryRouter>,
      { store }
    );
    expect(screen.getByText('RECENSEMENT')).toBeInTheDocument();
  });

  it('should render the error warning message if censuses are empty and there is an error', () => {
    store.dispatch(setError({ message: 'Error' } as Error));
    renderWithProviders(<EmptyCensusesWarning censuses={[]} />, { store });
    expect(
      screen.getByText(
        "Il semblerait qu'il y ait un problème avec le serveur :/"
      )
    ).toBeInTheDocument();
  });

  it('should not render anything if there are censuses', () => {
    renderWithProviders(<EmptyCensusesWarning censuses={[CensusMock]} />, {
      store,
    });
    expect(
      screen.queryByText("Vous n'avez pas encore d'archives")
    ).not.toBeInTheDocument();
    expect(screen.queryByText('RECENSEMENT')).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        "Il semblerait qu'il y ait un problème avec le serveur :/"
      )
    ).not.toBeInTheDocument();
  });
});
