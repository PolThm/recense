import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import StatisticsPage from '@/pages/StatisticsPage';

describe('StatisticsPage', () => {
  it('should render the StatisticsPage', () => {
    render(<StatisticsPage />);
    expect(screen.getByText('Statistics')).toBeInTheDocument();
  });
});
