import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { FC, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ArchiveModal from '@/components/ArchiveModal';
import ArchivePreview from '@/components/ArchivePreview';
import ConfirmModal from '@/components/shared/ConfirmModal';
import EmptyCensusesWarning from '@/components/shared/EmptyCensusesWarning';
import useLoadCensusesWithDelay from '@/hooks/useLoadCensusesWithDelay';
import { RootState } from '@/store';
import { deleteCensus } from '@/store/censusesSlice';
import { Census } from '@/types/interfaces';

const MyArchivesPage: FC = () => {
  const dispatch = useDispatch();
  const { areCensusesLoading, isCensusesError } = useLoadCensusesWithDelay();
  const censuses = useSelector(
    (state: RootState) => state.censusesStore.censuses
  );

  const [isArchiveModalOpen, setIsArchiveModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [currentCensus, setCurrentCensus] = useState<Census | null>(null);
  const [updateIndex, setUpdateIndex] = useState(0);

  const openArchiveModal = useCallback((census: Census) => {
    setCurrentCensus(census);
    setIsArchiveModalOpen(true);
  }, []);

  const openConfirmModal = useCallback((census: Census) => {
    setCurrentCensus(census);
    setIsConfirmModalOpen(true);
  }, []);

  const confirmArchiveDeletion = useCallback(() => {
    if (!currentCensus?.id) return;
    dispatch(deleteCensus(currentCensus.id));
    setIsConfirmModalOpen(false);
    setUpdateIndex((prev) => prev + 1);
  }, [currentCensus, dispatch]);

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 1,
        pt: { xs: 2, md: 0 },
      }}
    >
      <Typography variant="h1" gutterBottom>
        Mes Archives
      </Typography>
      <Typography variant="h2">Retrouvez tous vos recensements</Typography>

      <Container
        sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 4, md: 8 }, minHeight: 270 }}
      >
        {areCensusesLoading ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Grid
              key={updateIndex}
              container
              spacing={4}
              style={{ animation: 'fadein 0.5s ease-in-out' }}
            >
              {censuses.map((census) => {
                const name = `${census.firstName} ${census.lastName}`;

                if (!census.id) return null;
                return (
                  <Grid item xs={12} sm={6} md={4} key={census.id}>
                    <ArchivePreview
                      name={name}
                      date={census.date}
                      deleteArchive={() => openConfirmModal(census)}
                      openArchive={() => openArchiveModal(census)}
                    />
                  </Grid>
                );
              })}
            </Grid>
            {!censuses.length && (
              <EmptyCensusesWarning isCensusesError={isCensusesError} />
            )}
          </>
        )}
      </Container>

      {currentCensus && (
        <ArchiveModal
          census={currentCensus}
          isOpen={isArchiveModalOpen}
          handleClose={() => setIsArchiveModalOpen(false)}
        />
      )}
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        handleClose={() => setIsConfirmModalOpen(false)}
        confirmAction={() => confirmArchiveDeletion()}
      >
        Êtes-vous certain de vouloir supprimer cette archive ?
      </ConfirmModal>
    </Container>
  );
};

export default MyArchivesPage;
