import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { FC } from 'react';

type Props = {
  onClick: () => void;
};

const BackButton: FC<Props> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      startIcon={<ArrowBackIcon />}
      size="small"
      sx={{ position: 'absolute' }}
    >
      Retour
    </Button>
  );
};

export default BackButton;
