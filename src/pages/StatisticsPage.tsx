import { Container, Grid, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import StatCard from '@/components/StatCard';
import { RootState } from '@/store';

const StatisticsPage: FC = () => {
  const censuses = useSelector(
    (state: RootState) => state.censusesStore.censuses
  );
  const [ageAverage, setAgeAverage] = useState(0);
  const [incomeAverage, setIncomeAverage] = useState(0);
  const [residentsAverage, setResidentsAverage] = useState(0);

  const setAllAverages = () => {
    const { ageSum, incomeSum, residentsSum } = censuses.reduce(
      (acc, census) => {
        if (census.profile.age) acc.ageSum += census.profile.age;
        if (census.profile.income) acc.incomeSum += census.profile.income;
        if (census.lodging.residents)
          acc.residentsSum += census.lodging.residents;
        return acc;
      },
      { ageSum: 0, incomeSum: 0, residentsSum: 0 }
    );
    const censusLength = censuses.length;

    setAgeAverage(Math.floor(ageSum / censusLength));
    setIncomeAverage(Math.floor(incomeSum / censusLength));
    setResidentsAverage(Math.floor(residentsSum / censusLength));
  };

  useEffect(() => setAllAverages());

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
        Voici quelques moyennes de nos recentes enquêtes
      </Typography>

      <Grid container spacing={4} sx={{ my: 4 }}>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard title="Âge" score={ageAverage} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard
            title="Revenu annuel"
            score={incomeAverage}
            scoreVariant="h3"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard title="Résidents" score={residentsAverage} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default StatisticsPage;
