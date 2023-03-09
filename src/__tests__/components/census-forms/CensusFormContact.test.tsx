import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import CensusFormContact from '@/components/census-forms/CensusFormContact';

vi.mock('formik', () => ({
  useField: () => [
    {
      value: '',
      onChange: vi.fn(),
    },
    { touched: false, error: false },
  ],
}));

describe('CensusFormContact', () => {
  it('should render the text input firstName', () => {
    render(<CensusFormContact />);
    expect(screen.getByLabelText('Prénom')).toBeInTheDocument();
    expect(screen.getByLabelText('Prénom')).toHaveAttribute('type', 'text');
  });

  it('should render the text input lastName', () => {
    render(<CensusFormContact />);
    expect(screen.getByLabelText('Nom')).toBeInTheDocument();
    expect(screen.getByLabelText('Nom')).toHaveAttribute('type', 'text');
  });

  it('should render the text input email', () => {
    render(<CensusFormContact />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'email');
  });

  it('should render the text input phone', () => {
    render(<CensusFormContact />);
    expect(screen.getByLabelText('Téléphone (optionnel)')).toBeInTheDocument();
    expect(screen.getByLabelText('Téléphone (optionnel)')).toHaveAttribute(
      'type',
      'tel'
    );
  });
});
