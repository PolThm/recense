import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import BackButton from '@/components/shared/BackButton';

describe('BackButton', () => {
  it('should render the button text by default', () => {
    const defaultLabel = 'Retour';
    render(<BackButton onClick={vi.fn()} />);
    expect(screen.getByText(defaultLabel)).toBeInTheDocument();
  });

  it('should render the custom button label when passed as a prop', () => {
    const customLabel = 'Back';
    render(<BackButton onClick={vi.fn()}>{customLabel}</BackButton>);
    expect(screen.getByText(customLabel)).toBeInTheDocument();
  });

  it('should call onClick when button is clicked', () => {
    const handleClick = vi.fn();
    render(<BackButton onClick={handleClick} />);
    fireEvent.click(screen.getByTestId('back-button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render with an ArrowBackIcon', () => {
    render(<BackButton onClick={vi.fn()} />);
    expect(screen.getByTestId('ArrowBackIcon')).toBeInTheDocument();
  });
});
