import { Box, Container, Grid, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import ArchivePreview from '@/components/ArchivePreview';
import { RootState } from '@/store';

const MyArchivesPage: FC = () => {
  const censuses = useSelector(
    (state: RootState) => state.censusesStore.censuses
  );

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
          const { date, contact } = census;
          const name = `${contact.firstName} ${contact.lastName}`;

          return (
            <Grid item xs={12} sm={6} md={4} key={census.id}>
              <ArchivePreview name={name} date={date} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default MyArchivesPage;
