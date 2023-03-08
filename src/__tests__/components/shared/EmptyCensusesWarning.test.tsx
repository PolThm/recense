import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import EmptyCensusesWarning from '@/components/shared/EmptyCensusesWarning';

describe('EmptyCensusesWarning', () => {
  it('should render the info warning message if there is NO error', () => {
    render(
      <MemoryRouter>
        <EmptyCensusesWarning isCensusesError={false} />
      </MemoryRouter>
    );
    expect(
      screen.getByText("Vous n'avez pas encore d'archives")
    ).toBeInTheDocument();
  });

  it('should render the new census redirection button if there is NO error', () => {
    render(
      <MemoryRouter>
        <EmptyCensusesWarning isCensusesError={false} />
      </MemoryRouter>
    );
    expect(screen.getByText('RECENSEMENT')).toBeInTheDocument();
  });

  it('should render the error warning message if there is an error', () => {
    render(<EmptyCensusesWarning isCensusesError />);
    expect(
      screen.getByText(
        "Il semblerait qu'il y ait un problème avec le serveur :/"
      )
    ).toBeInTheDocument();
  });

  it('should render the info warning message if there is NO error', () => {
    render(
      <MemoryRouter>
        <EmptyCensusesWarning isCensusesError={false} />
      </MemoryRouter>
    );
    expect(
      screen.getByText("Vous n'avez pas encore d'archives")
    ).toBeInTheDocument();
  });
});
