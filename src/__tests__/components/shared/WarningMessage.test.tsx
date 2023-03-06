import { render, screen } from '@testing-library/react';

import WarningMessage from '@/components/shared/WarningMessage';
import { WarningTypes } from '@/types/enums';

describe('WarningMessage', () => {
  const defaultChildren = 'This is a warning message';

  it('should render the info warning message with the correct text and icon', () => {
    render(
      <WarningMessage type={WarningTypes.Info}>
        {defaultChildren}
      </WarningMessage>
    );
    expect(screen.getByText(defaultChildren)).toBeInTheDocument();
    expect(screen.getByTestId('InfoIcon')).toBeInTheDocument();
  });

  it('should render the error warning message with the correct text and icon', () => {
    render(
      <WarningMessage type={WarningTypes.Error}>
        {defaultChildren}
      </WarningMessage>
    );
    expect(screen.getByText(defaultChildren)).toBeInTheDocument();
    expect(screen.getByTestId('ErrorIcon')).toBeInTheDocument();
  });
});
