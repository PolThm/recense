import { Box, Button } from '@mui/material';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import WarningMessage from '@/components/shared/WarningMessage';
import { RootState } from '@/store';
import { Routes, WarningTypes } from '@/types/enums';

const EmptyCensusesWarning: FC = () => {
  const isCensusError = useSelector(
    (state: RootState) => !!state.censusesStore.error
  );

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
      {isCensusError ? (
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
