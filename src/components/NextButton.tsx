import { Button } from '@mui/material';
import { FC } from 'react';

type Props = {
  onClick: () => void;
  children: string;
};

const NextButton: FC<Props> = ({ onClick, children }) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {children}
    </Button>
  );
};

export default NextButton;
