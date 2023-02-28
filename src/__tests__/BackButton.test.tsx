import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vitest } from 'vitest';

import BackButton from '@/components/shared/BackButton';

describe('BackButton', () => {
  it('should call onClick function when button is clicked', () => {
    const onClickMock = vitest.fn();
    render(<BackButton onClick={onClickMock} />);
    fireEvent.click(screen.getByTestId('back-button'));
    expect(onClickMock).toHaveBeenCalled();
  });
});
