import { render, screen } from '@testing-library/react';

import Footer from '@/components/Footer';

describe('Footer', () => {
  it('should render the correct author github link', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'Pol Thomas' })).toHaveAttribute(
      'href',
      'https://github.com/PolThm/recense'
    );
  });
});
