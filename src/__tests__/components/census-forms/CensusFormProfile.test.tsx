import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import CensusFormProfile from '@/components/census-forms/CensusFormProfile';

vi.mock('formik', () => ({
  useField: () => [
    {
      value: '',
      onChange: vi.fn(),
    },
    { touched: false, error: false },
  ],
}));

describe('CensusFormProfile', () => {
  it('should render the text input number age', () => {
    render(<CensusFormProfile />);
    expect(screen.getByLabelText('Âge')).toBeInTheDocument();
    expect(screen.getByLabelText('Âge')).toHaveAttribute('type', 'number');
  });

  it('should render the select gender', () => {
    render(<CensusFormProfile />);
    expect(screen.getByLabelText('Genre')).toBeInTheDocument();
    expect(screen.getByLabelText('Genre')).toHaveAttribute(
      'aria-haspopup',
      'listbox'
    );
  });

  it('should render the select situation', () => {
    render(<CensusFormProfile />);
    expect(screen.getByLabelText('Situation')).toBeInTheDocument();
    expect(screen.getByLabelText('Situation')).toHaveAttribute(
      'aria-haspopup',
      'listbox'
    );
  });

  it('should render the select education', () => {
    render(<CensusFormProfile />);
    expect(screen.getByLabelText('Éducation')).toBeInTheDocument();
    expect(screen.getByLabelText('Éducation')).toHaveAttribute(
      'aria-haspopup',
      'listbox'
    );
  });

  it('should render the text input number income', () => {
    render(<CensusFormProfile />);
    expect(screen.getByLabelText('Revenu annuel')).toBeInTheDocument();
    expect(screen.getByLabelText('Revenu annuel')).toHaveAttribute(
      'type',
      'number'
    );
  });
});
