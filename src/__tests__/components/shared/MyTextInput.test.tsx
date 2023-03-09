import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import MyTextInput from '@/components/shared/MyTextInput';

vi.mock('formik', () => ({
  useField: () => [
    {
      value: '',
      onChange: vi.fn(),
    },
    { touched: false, error: '' },
  ],
}));

describe('MyTextInput', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render a text type input (with label)', () => {
    render(<MyTextInput label="Prénom" name="firstName" type="text" />);
    expect(screen.getByLabelText('Prénom')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');
  });

  it('should render a email type input (with label)', () => {
    render(<MyTextInput label="Email" name="email" type="email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
  });

  it('should render a tel type input (with label)', () => {
    render(<MyTextInput label="Téléphone" name="phone" type="tel" />);
    expect(screen.getByLabelText('Téléphone')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'tel');
  });

  it('should render a number type input (with label)', () => {
    render(<MyTextInput label="Nombre" name="number" type="number" />);
    expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
    expect(screen.getByLabelText('Nombre')).toHaveAttribute('type', 'number');
  });

  it('should render a password type input (with label)', () => {
    render(
      <MyTextInput label="Mot de passe" name="password" type="password" />
    );
    expect(screen.getByLabelText('Mot de passe')).toBeInTheDocument();
    expect(screen.getByLabelText('Mot de passe')).toHaveAttribute(
      'type',
      'password'
    );
  });

  it('should render a custom placeholder', () => {
    render(
      <MyTextInput
        label="Email"
        name="email"
        type="email"
        placeholder="Ceci est un placeholder"
      />
    );
    expect(
      screen.getByPlaceholderText('Ceci est un placeholder')
    ).toBeInTheDocument();
  });
});
