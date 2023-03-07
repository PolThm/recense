import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import EmptyCensusesWarning from '@/components/shared/EmptyCensusesWarning';
import { setupStore } from '@/store';
import { setError } from '@/store/censusesSlice';
import { renderWithProviders } from '@/utils/tests-utils';

describe('EmptyCensusesWarning', () => {
  let store: ReturnType<typeof setupStore>;

  beforeEach(() => {
    store = setupStore();
  });

  it('should render the info warning message if there is NO error', () => {
    renderWithProviders(
      <MemoryRouter>
        <EmptyCensusesWarning />
      </MemoryRouter>,
      { store }
    );
    expect(
      screen.getByText("Vous n'avez pas encore d'archives")
    ).toBeInTheDocument();
  });

  it('should render the new census redirection button if there is NO error', () => {
    renderWithProviders(
      <MemoryRouter>
        <EmptyCensusesWarning />
      </MemoryRouter>,
      { store }
    );
    expect(screen.getByText('RECENSEMENT')).toBeInTheDocument();
  });

  it('should render the error warning message if there is an error', () => {
    store.dispatch(setError({ message: 'Error' } as Error));
    renderWithProviders(<EmptyCensusesWarning />, { store });
    expect(
      screen.getByText(
        "Il semblerait qu'il y ait un problème avec le serveur :/"
      )
    ).toBeInTheDocument();
  });

  it('should render the info warning message if there is NO error', () => {
    renderWithProviders(
      <MemoryRouter>
        <EmptyCensusesWarning />
      </MemoryRouter>,
      { store }
    );
    expect(
      screen.getByText("Vous n'avez pas encore d'archives")
    ).toBeInTheDocument();
  });
});
