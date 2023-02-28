import { Container, Grid, Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ArchiveModal from '@/components/ArchiveModal';
import ArchivePreview from '@/components/ArchivePreview';
import ConfirmModal from '@/components/shared/ConfirmModal';
import { RootState } from '@/store';
import { deleteCensus } from '@/store/censusesSlice';
import { Census } from '@/types/interfaces';

const MyArchivesPage: FC = () => {
  const dispatch = useDispatch();
  const censuses = useSelector(
    (state: RootState) => state.censusesStore.censuses
  );

  const [isArchiveModalOpen, setIsArchiveModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [currentCensus, setCurrentCensus] = useState<Census | null>(null);

  const openArchiveModal = (census: Census) => {
    setCurrentCensus(census);
    setIsArchiveModalOpen(true);
  };

  const openConfirmModal = (census: Census) => {
    setCurrentCensus(census);
    setIsConfirmModalOpen(true);
  };

  const confirmArchiveDeletion = () => {
    if (!currentCensus?.id) return;
    dispatch(deleteCensus(currentCensus.id));
    setIsConfirmModalOpen(false);
  };

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
      <Typography variant="h4">Retrouvez tous vos recensements</Typography>

      <Grid container spacing={4} sx={{ my: { xs: 1, md: 4 } }}>
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
        Êtes-vous sûr de vouloir supprimer cette archive ?
      </ConfirmModal>
    </Container>
  );
};

export default MyArchivesPage;
