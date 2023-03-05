import InfoIcon from '@mui/icons-material/Info';
import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { Routes } from '@/types/enums';
import { Census } from '@/types/interfaces';

type Props = {
  censuses: Census[];
};

const EmptyCensusesMessage: FC<Props> = ({ censuses }) => {
  if (censuses.length === 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          gap: 4,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            color: 'primary.main',
          }}
        >
          <InfoIcon />
          <Typography variant="h5" component="p">
            Vous n'avez pas encore d'archives
          </Typography>
        </Box>
        <Button
          component={NavLink}
          to={Routes.NewCensus}
          variant="contained"
          color="secondary"
        >
          RECENSEMENT
        </Button>
      </Box>
    );
  }
  return null;
};

export default EmptyCensusesMessage;
