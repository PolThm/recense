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

  const setAge = () => {
    const age =
      censuses.reduce((acc, census) => {
        if (!census.profile.age) return acc;
        return acc + census.profile.age;
      }, 0) / censuses.length;

    setAgeAverage(Math.floor(age));
  };

  const setIncome = () => {
    const income =
      censuses.reduce((acc, census) => {
        if (!census.profile.income) return acc;
        return acc + census.profile.income;
      }, 0) / censuses.length;

    setIncomeAverage(Math.floor(income));
  };

  const setResidents = () => {
    const residents =
      censuses.reduce((acc, census) => {
        if (!census.lodging.residents) return acc;
        return acc + census.lodging.residents;
      }, 0) / censuses.length;

    setResidentsAverage(Math.floor(residents));
  };

  const setAllStats = () => {
    setAge();
    setIncome();
    setResidents();
  };

  useEffect(() => {
    setAllStats();
  });

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
