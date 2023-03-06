import { act, fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import DemoNotif from '@/components/DemoNotif';

const title = 'Bienvenue dans cette démo !';

describe('DemoNotif', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render the correct message after 1s', () => {
    render(<DemoNotif />);
    expect(screen.queryByText(title)).not.toBeInTheDocument();
    act(() => vi.advanceTimersByTime(1000));
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('should close the notification when clicking on the close button (once it is open) after a small transition', () => {
    render(<DemoNotif />);
    act(() => vi.advanceTimersByTime(1000));
    fireEvent.click(screen.getByTestId('CloseIcon'));
    act(() => vi.advanceTimersByTime(500));
    expect(screen.queryByText(title)).not.toBeInTheDocument();
  });
});
