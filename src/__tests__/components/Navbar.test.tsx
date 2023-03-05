import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import Navbar from '@/components/Navbar';

describe('Navbar', () => {
  it('should render the correct title', () => {
    render(<Navbar />);
    expect(screen.getByText('Recense')).toBeInTheDocument();
  });
});
