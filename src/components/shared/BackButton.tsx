import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { FC } from 'react';

type Props = {
  onClick: () => void;
  children?: string;
};

const BackButton: FC<Props> = ({ onClick, children = 'Retour' }) => {
  return (
    <Button
      data-testid="back-button"
      startIcon={<ArrowBackIcon />}
      size="small"
      sx={{ position: 'absolute' }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default BackButton;
