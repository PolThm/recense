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
        if (census.age) acc.ageSum += census.age;
        if (census.income) acc.incomeSum += census.income;
        if (census.residents) acc.residentsSum += census.residents;
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
        pt: { xs: 2, md: 0 },
      }}
    >
      <Typography variant="h1" textAlign="center" gutterBottom>
        Statistics Globales
      </Typography>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Voici quelques chiffres tirés de nos recensements
      </Typography>
      <Typography textAlign="center" sx={{ mt: 1 }}>
        Chaque résultat représente la moyenne des données recueillies
        (arrondies)
      </Typography>

      <Grid container spacing={4} sx={{ mt: { xs: 1, md: 4 }, mb: 4 }}>
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
