import { Container, Grid, Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ArchiveModal from '@/components/ArchiveModal';
import ArchivePreview from '@/components/ArchivePreview';
import { RootState } from '@/store';
import { deleteCensus } from '@/store/censusesSlice';

const MyArchivesPage: FC = () => {
  const dispatch = useDispatch();
  const censuses = useSelector(
    (state: RootState) => state.censusesStore.censuses
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteArchive = (id: number) => {
    dispatch(deleteCensus(id));
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
            <>
              <Grid item xs={12} sm={6} md={4} key={census.id}>
                <ArchivePreview
                  name={name}
                  date={date}
                  deleteArchive={() => deleteArchive(id)}
                  openArchive={() => setIsModalOpen(true)}
                />
              </Grid>
              <ArchiveModal
                census={census}
                isOpen={isModalOpen}
                handleClose={() => setIsModalOpen(false)}
              />
            </>
          );
        })}
      </Grid>
    </Container>
  );
};

export default MyArchivesPage;
