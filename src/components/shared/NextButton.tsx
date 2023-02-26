import { Button } from '@mui/material';
import { FC } from 'react';

type Props = {
  children: string;
  isDisabled: boolean;
  onClick: () => void;
};

const NextButton: FC<Props> = ({ children, onClick, isDisabled }) => {
  return (
    <Button variant="contained" onClick={onClick} disabled={isDisabled}>
      {children}
    </Button>
  );
};

export default NextButton;
