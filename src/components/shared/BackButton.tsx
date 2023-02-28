import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { FC } from 'react';

type Props = {
  onClick: () => void;
  children?: string;
};

const BackButton: FC<Props> = ({ onClick, children }) => {
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

BackButton.defaultProps = {
  children: 'Retour',
};

export default BackButton;
