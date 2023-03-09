import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import MyCheckbox from '@/components/shared/MyCheckbox';

vi.mock('formik', () => ({
  useField: () => [
    {
      value: '',
      onChange: vi.fn(),
    },
    { touched: false, error: false },
  ],
}));

describe('MyCheckbox', () => {
  it('should render a checkbox (with label)', () => {
    render(<MyCheckbox name="accept">Accepter les conditions</MyCheckbox>);
    expect(
      screen.getByLabelText('Accepter les conditions')
    ).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
});
