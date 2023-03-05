import { render, screen } from '@testing-library/react';

import StatCard from '@/components/StatCard';

describe('StatCard', () => {
  const defaultProps = {
    title: 'title',
    score: 10,
  };

  it('should render the correct title', () => {
    render(<StatCard {...defaultProps} />);
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it('should render the correct score', () => {
    render(<StatCard {...defaultProps} />);
    expect(screen.getByText(defaultProps.score)).toBeInTheDocument();
  });
});
