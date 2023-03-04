import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';

import RandomJoke from '@/components/RandomJoke';

describe('RandomJoke', () => {
  it('should render the intro', async () => {
    render(<RandomJoke />);
    const intro = screen.getByText(
      'Pour vous consoler, voici une petite blague aléatoire en anglais :'
    );
    expect(intro).toBeInTheDocument();
  });

  it('should render the loader waiting the api', () => {
    render(<RandomJoke />);
    expect(screen.getByText('Chargement...')).toBeInTheDocument();
  });

  it('should render the joke', async () => {
    render(<RandomJoke />);
    const joke = await screen.findByTestId('random-joke-joke');
    expect(joke).toBeInTheDocument();
  });
});
