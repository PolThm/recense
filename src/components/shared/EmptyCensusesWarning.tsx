import { Box, Button } from '@mui/material';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import WarningMessage from '@/components/WarningMessage';
import { RootState } from '@/store';
import { Routes, WarningTypes } from '@/types/enums';
import { Census } from '@/types/interfaces';

type Props = {
  censuses: Census[];
};

const EmptyCensusesWarning: FC<Props> = ({ censuses }) => {
  const isCensusError = useSelector(
    (state: RootState) => !!state.censusesStore.error
  );

  if (!censuses.length) {
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
        {!isCensusError ? (
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
  }
  return null;
};

export default EmptyCensusesWarning;
