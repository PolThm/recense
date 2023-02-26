import { Container, Grid, Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ArchiveModal from '@/components/ArchiveModal';
import ArchivePreview from '@/components/ArchivePreview';
import { RootState } from '@/store';
import { deleteCensus } from '@/store/censusesSlice';
import { Census } from '@/types/interfaces';

const MyArchivesPage: FC = () => {
  const dispatch = useDispatch();
  const censuses = useSelector(
    (state: RootState) => state.censusesStore.censuses
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCensus, setCurrentCensus] = useState<Census | null>(null);

  const openArchiveModal = (census: Census) => {
    setCurrentCensus(census);
    setIsModalOpen(true);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 1,
      }}
    >
      <Typography variant="h1" gutterBottom>
        Mes Archives
      </Typography>
      <Typography variant="h4">Retrouvez tous vos recensements</Typography>

      <Grid container spacing={4} sx={{ my: 4 }}>
        {censuses.map((census) => {
          const { id, date, contact } = census;
          const name = `${contact.firstName} ${contact.lastName}`;

          if (!id) return null;
          return (
            <Grid item xs={12} sm={6} md={4} key={census.id}>
              <ArchivePreview
                name={name}
                date={date}
                deleteArchive={() => dispatch(deleteCensus(id))}
                openArchive={() => openArchiveModal(census)}
              />
            </Grid>
          );
        })}
      </Grid>
      {currentCensus && (
        <ArchiveModal
          census={currentCensus}
          isOpen={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
        />
      )}
    </Container>
  );
};

export default MyArchivesPage;
