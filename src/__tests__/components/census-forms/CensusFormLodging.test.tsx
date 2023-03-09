import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import CensusFormLodging from '@/components/census-forms/CensusFormLodging';

vi.mock('formik', () => ({
  useField: () => [
    {
      value: '',
      onChange: vi.fn(),
    },
    { touched: false, error: false },
  ],
}));

describe('CensusFormLodging', () => {
  it('should render the select lodging type', () => {
    render(<CensusFormLodging />);
    expect(screen.getByLabelText('Type de logement')).toBeInTheDocument();
    expect(screen.getByLabelText('Type de logement')).toHaveAttribute(
      'aria-haspopup',
      'listbox'
    );
  });

  it('should render the select location', () => {
    render(<CensusFormLodging />);
    expect(screen.getByLabelText('Lieu')).toBeInTheDocument();
    expect(screen.getByLabelText('Lieu')).toHaveAttribute(
      'aria-haspopup',
      'listbox'
    );
  });

  it('should render the text input number of residents', () => {
    render(<CensusFormLodging />);
    expect(screen.getByLabelText('Nombre de résidents')).toBeInTheDocument();
    expect(screen.getByLabelText('Nombre de résidents')).toHaveAttribute(
      'type',
      'number'
    );
  });
});
