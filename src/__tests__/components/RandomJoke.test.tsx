import { screen } from '@testing-library/react';

import RandomJoke from '@/components/RandomJoke';
import { setupStore } from '@/store';
import { renderWithProviders } from '@/utils/tests-utils';

describe('RandomJoke', () => {
  let store: ReturnType<typeof setupStore>;

  beforeEach(() => {
    store = setupStore();
  });

  it('should render the intro', async () => {
    renderWithProviders(<RandomJoke />, { store });
    const intro = screen.getByText(
      'Pour vous consoler, voici une petite blague aléatoire en anglais :'
    );
    expect(intro).toBeInTheDocument();
  });

  it('should render the loader waiting the api', () => {
    renderWithProviders(<RandomJoke />, { store });
    expect(screen.getByText('Chargement...')).toBeInTheDocument();
  });

  it('should render the joke', async () => {
    renderWithProviders(<RandomJoke />, { store });
    const joke = await screen.findByTestId('random-joke-joke');
    expect(joke).toBeInTheDocument();
  });
});
