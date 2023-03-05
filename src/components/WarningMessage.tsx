import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import { Box, Typography } from '@mui/material';
import { FC } from 'react';

import { WarningTypes } from '@/types/enums';

type Props = {
  type: WarningTypes;
  children: string;
};

const WarningMessage: FC<Props> = ({ type, children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        color: type === WarningTypes.Info ? 'primary.main' : 'error.main',
      }}
    >
      {type === WarningTypes.Info ? <InfoIcon /> : <ErrorIcon />}
      <Typography variant="h6" component="p">
        {children}
      </Typography>
    </Box>
  );
};

export default WarningMessage;
