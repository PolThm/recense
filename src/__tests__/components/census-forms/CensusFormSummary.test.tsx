import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import CensusMock from '@/__tests__/mocks/CensusMock';
import CensusFormSummary from '@/components/census-forms/CensusFormSummary';

vi.mock('formik', () => ({
  useField: () => [
    {
      value: '',
      onChange: vi.fn(),
    },
    { touched: false, error: false },
  ],
}));

describe('CensusFormSummary', () => {
  it('should render the summary', () => {
    render(<CensusFormSummary census={CensusMock} />);
    expect(screen.getByTestId('census-summary')).toBeInTheDocument();
  });

  it('should render the consent checkbox', () => {
    render(<CensusFormSummary census={CensusMock} />);
    expect(
      screen.getByLabelText(
        "L'utilisateur accepte les conditions d'utilisation"
      )
    ).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
});
