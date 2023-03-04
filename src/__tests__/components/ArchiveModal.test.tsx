import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import ArchiveModal from '@/components/ArchiveModal';
import censusesMock from '@/mocks/CensusesMock';

describe('ArchiveModal', () => {
  const defaultProps = {
    census: censusesMock[0],
    isOpen: true,
    handleClose: vi.fn(),
  };

  it('should render the modal with the correct date title', () => {
    render(<ArchiveModal {...defaultProps} />);
    expect(screen.getByText(defaultProps.census.date)).toBeInTheDocument();
  });

  it('should render the modal with the CensusSummary component', () => {
    render(<ArchiveModal {...defaultProps} />);
    expect(screen.getByTestId('census-summary')).toBeInTheDocument();
  });

  it('should render the modal with the close icon', () => {
    render(<ArchiveModal {...defaultProps} />);
    expect(screen.getByTestId('archive-modal-close-icon')).toBeInTheDocument();
  });

  it('should call the handleClose function when the close icon is clicked', () => {
    const handleClose = vi.fn();
    render(<ArchiveModal {...defaultProps} handleClose={handleClose} />);
    fireEvent.click(screen.getByTestId('archive-modal-close-icon'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
