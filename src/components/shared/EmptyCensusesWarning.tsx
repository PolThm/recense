import { Box, Button } from '@mui/material';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import WarningMessage from '@/components/shared/WarningMessage';
import { Routes, WarningTypes } from '@/types/enums';

interface Props {
  isCensusesError: boolean;
}

const EmptyCensusesWarning: FC<Props> = ({ isCensusesError }) => {
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
      data-testid="empty-censuses-warning"
    >
      {isCensusesError ? (
        <WarningMessage type={WarningTypes.Error}>
          Il semblerait qu'il y ait un problème avec le serveur :/
        </WarningMessage>
      ) : (
        <>
          <WarningMessage type={WarningTypes.Info}>
            Vous n'avez pas encore d'archives
          </WarningMessage>
          <Button
            component={NavLink}
            to={Routes.NewCensus}
            variant="contained"
            color="secondary"
          >
            RECENSEMENT
          </Button>
        </>
      )}
    </Box>
  );
};

export default EmptyCensusesWarning;
