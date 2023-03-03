import { fireEvent, render, screen } from '@testing-library/react';
import { vitest } from 'vitest';

import ConfirmModal from '@/components/shared/ConfirmModal';

describe('ConfirmModal', () => {
  const defaultProps = {
    isOpen: true,
    handleClose: () => {},
    confirmAction: () => {},
  };

  const defaultTitle = 'Are you sure?';

  it('should render the modal with the correct title', () => {
    render(<ConfirmModal {...defaultProps}>{defaultTitle}</ConfirmModal>);
    expect(screen.getByText(defaultTitle)).toBeInTheDocument();
  });

  it('should render the modal with a custom title', () => {
    const customTitle = 'Custom title';
    render(<ConfirmModal {...defaultProps}>{customTitle}</ConfirmModal>);
    expect(screen.getByText(customTitle)).toBeInTheDocument();
  });

  it('should render the confirm and cancel buttons', () => {
    render(<ConfirmModal {...defaultProps}>{defaultTitle}</ConfirmModal>);
    expect(screen.getByText('Confirmer')).toBeInTheDocument();
    expect(screen.getByText('Annuler')).toBeInTheDocument();
  });

  it('should call the confirmAction function when the confirm button is clicked', () => {
    const confirmAction = vitest.fn();
    render(
      <ConfirmModal {...defaultProps} confirmAction={confirmAction}>
        {defaultTitle}
      </ConfirmModal>
    );
    fireEvent.click(screen.getByText('Confirmer'));
    expect(confirmAction).toHaveBeenCalledTimes(1);
  });

  it('should call the handleClose function when the cancel button is clicked', () => {
    const handleClose = vitest.fn();
    render(
      <ConfirmModal {...defaultProps} handleClose={handleClose}>
        {defaultTitle}
      </ConfirmModal>
    );
    fireEvent.click(screen.getByText('Annuler'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should not render the modal when isOpen is false', () => {
    render(
      <ConfirmModal {...defaultProps} isOpen={false}>
        {defaultTitle}
      </ConfirmModal>
    );
    expect(screen.queryByText(defaultTitle)).not.toBeInTheDocument();
  });

  it('should render the modal when isOpen is true', () => {
    render(
      <ConfirmModal {...defaultProps} isOpen>
        {defaultTitle}
      </ConfirmModal>
    );
    expect(screen.getByText(defaultTitle)).toBeInTheDocument();
  });
});
