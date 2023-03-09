import { MenuItem } from '@mui/material';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import MySelect from '@/components/shared/MySelect';
import { LodgingType } from '@/types/enums';

const { House, Apartment } = LodgingType;

vi.mock('formik', () => ({
  useField: () => [
    {
      value: '',
      onChange: vi.fn(),
    },
    { touched: false, error: '' },
  ],
}));

describe('MySelect', () => {
  it('should render a select input with two items (with label)', () => {
    render(
      <MySelect label="Type de logement" name="lodgingType">
        <MenuItem value={House}>{House}</MenuItem>
        <MenuItem value={Apartment}>{Apartment}</MenuItem>
      </MySelect>
    );
    expect(screen.getByLabelText('Type de logement')).toBeInTheDocument();
    expect(screen.getByLabelText('Type de logement')).toHaveAttribute(
      'aria-haspopup',
      'listbox'
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
