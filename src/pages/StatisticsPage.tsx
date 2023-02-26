import { Container, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';

const StatisticsPage: FC = () => {
  const censuses = useSelector(
    (state: RootState) => state.censusesStore.censuses
  );

  const getAgeAverage = () => {
    const filteredCensuses = censuses.filter(
      (census) => census.profile.age !== undefined
    );

    const ageAverage =
      filteredCensuses.reduce((acc, census) => {
        if (!census.profile.age) return acc;
        return acc + census.profile.age;
      }, 0) / filteredCensuses.length;

    return ageAverage;
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 1,
        mt: -3,
      }}
    >
      <Typography variant="h1" textAlign="center" gutterBottom>
        Statistics Globales
      </Typography>
      <Typography variant="h4" textAlign="center">
        Voici une page ou vous pourrez retrouver les statistiques globales
      </Typography>

      <Typography
        variant="h4"
        textAlign="center"
        sx={{ mt: 4, color: 'primary.main' }}
      >
        Age moyen: {getAgeAverage()} ans
      </Typography>
    </Container>
  );
};

export default StatisticsPage;
