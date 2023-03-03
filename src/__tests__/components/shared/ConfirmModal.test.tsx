import { fireEvent, render, screen } from '@testing-library/react';
import { vitest } from 'vitest';

import ConfirmModal from '@/components/shared/ConfirmModal';

describe('ConfirmModal', () => {
  const defaultProps = {
    isOpen: true,
    handleClose: () => {},
    confirmAction: () => {},
  };

  const defaultChildren = 'Are you sure?';

  it('should render the modal with the correct title', () => {
    render(<ConfirmModal {...defaultProps}>{defaultChildren}</ConfirmModal>);
    expect(screen.getByText(defaultChildren)).toBeInTheDocument();
  });

  it('should render the modal with a custom title', () => {
    const customTitle = 'Custom title';
    render(<ConfirmModal {...defaultProps}>{customTitle}</ConfirmModal>);
    expect(screen.getByText(customTitle)).toBeInTheDocument();
  });

  it('should render the confirm and cancel buttons', () => {
    render(<ConfirmModal {...defaultProps}>{defaultChildren}</ConfirmModal>);
    expect(screen.getByText('Confirmer')).toBeInTheDocument();
    expect(screen.getByText('Annuler')).toBeInTheDocument();
  });

  it('should call the confirmAction function when the confirm button is clicked', () => {
    const confirmAction = vitest.fn();
    render(
      <ConfirmModal {...defaultProps} confirmAction={confirmAction}>
        {defaultChildren}
      </ConfirmModal>
    );
    fireEvent.click(screen.getByText('Confirmer'));
    expect(confirmAction).toHaveBeenCalledTimes(1);
  });

  it('should call the handleClose function when the cancel button is clicked', () => {
    const handleClose = vitest.fn();
    render(
      <ConfirmModal {...defaultProps} handleClose={handleClose}>
        {defaultChildren}
      </ConfirmModal>
    );
    fireEvent.click(screen.getByText('Annuler'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should not render the modal when isOpen is false', () => {
    render(
      <ConfirmModal {...defaultProps} isOpen={false}>
        {defaultChildren}
      </ConfirmModal>
    );
    expect(screen.queryByText(defaultChildren)).not.toBeInTheDocument();
  });

  it('should render the modal when isOpen is true', () => {
    render(
      <ConfirmModal {...defaultProps} isOpen>
        {defaultChildren}
      </ConfirmModal>
    );
    expect(screen.getByText(defaultChildren)).toBeInTheDocument();
  });
});
