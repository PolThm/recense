import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import NewCensusLanding from '@/components/NewCensusLanding';

describe('NewCensusLanding', () => {
  const defaultProps = {
    startCensus: vi.fn(),
  };

  it('should render the correct title', () => {
    render(<NewCensusLanding {...defaultProps} />);
    expect(screen.getByText('Recensement')).toBeInTheDocument();
  });

  it('should render the correct subtitle', () => {
    render(<NewCensusLanding {...defaultProps} />);
    expect(
      screen.getByText('Vous allez remplir un questionnaire')
    ).toBeInTheDocument();
  });

  it('should call startCensus when clicking on the button', () => {
    render(<NewCensusLanding {...defaultProps} />);
    fireEvent.click(screen.getByRole('button', { name: 'Commencer' }));
    expect(defaultProps.startCensus).toHaveBeenCalled();
  });
});
