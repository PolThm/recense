import { fireEvent, screen } from '@testing-library/react';
import { vi } from 'vitest';

import StatisticsPage from '@/pages/StatisticsPage';
import { setupStore } from '@/store';
import { renderWithProviders } from '@/utils/tests-utils';

describe('StatisticsPage', () => {
  const store = setupStore();

  it('should render the title', () => {
    renderWithProviders(<StatisticsPage />, { store });
    expect(screen.getByText('Statistics Globales')).toBeInTheDocument();
  });
});
