import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import ArchivePreview from '@/components/ArchivePreview';

describe('ArchivePreview', () => {
  const defaultProps = {
    name: 'Jean Dupont',
    date: '05-03-2023',
    deleteArchive: vi.fn(),
    openArchive: vi.fn(),
  };

  it('should render the correct name', () => {
    render(<ArchivePreview {...defaultProps} />);
    expect(screen.getByText(defaultProps.name)).toBeInTheDocument();
  });

  it('should render the correct date', () => {
    render(<ArchivePreview {...defaultProps} />);
    expect(screen.getByText(defaultProps.date)).toBeInTheDocument();
  });

  it('should call the deleteArchive function when the delete icon button is clicked', () => {
    render(<ArchivePreview {...defaultProps} />);
    fireEvent.click(screen.getByTestId('delete-archive-icon'));
    expect(defaultProps.deleteArchive).toHaveBeenCalled();
  });

  it('should call the openArchive function when the open button is clicked', () => {
    render(<ArchivePreview {...defaultProps} />);
    fireEvent.click(screen.getByRole('button', { name: 'Ouvrir' }));
    expect(defaultProps.openArchive).toHaveBeenCalled();
  });
});
