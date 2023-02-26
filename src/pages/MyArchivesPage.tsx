import { Container, Grid, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ArchivePreview from '@/components/ArchivePreview';
import { RootState } from '@/store';
import { deleteCensus } from '@/store/censusesSlice';

const MyArchivesPage: FC = () => {
  const dispatch = useDispatch();
  const censuses = useSelector(
    (state: RootState) => state.censusesStore.censuses
  );

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

          return (
            <Grid item xs={12} sm={6} md={4} key={census.id}>
              <ArchivePreview
                name={name}
                date={date}
                deleteArchive={() => id && deleteArchive(id)}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default MyArchivesPage;
