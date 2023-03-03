import { fireEvent, render, screen } from '@testing-library/react';
import { vitest } from 'vitest';

import BackButton from '@/components/shared/BackButton';

describe('BackButton', () => {
  it('should render the button text by default', () => {
    const defaultLabel = 'Retour';
    render(<BackButton onClick={() => {}} />);
    expect(screen.getByText(defaultLabel)).toBeInTheDocument();
  });

  it('should render the custom button label when passed as a prop', () => {
    const customLabel = 'Back';
    render(<BackButton onClick={() => {}}>{customLabel}</BackButton>);
    expect(screen.getByText(customLabel)).toBeInTheDocument();
  });

  it('should call onClick when button is clicked', () => {
    const handleClick = vitest.fn();
    render(<BackButton onClick={handleClick} />);
    fireEvent.click(screen.getByTestId('back-button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render with an ArrowBackIcon', () => {
    render(<BackButton onClick={() => {}} />);
    expect(screen.getByTestId('ArrowBackIcon')).toBeInTheDocument();
  });
});
