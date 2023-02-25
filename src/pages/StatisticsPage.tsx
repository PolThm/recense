import { Container, Typography } from '@mui/material';
import React, { FC } from 'react';

const StatisticsPage: FC = () => {
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
      <Typography variant="h1" gutterBottom>
        Statistics Globales
      </Typography>
      <Typography variant="h4">
        Voici une page ou vous pourrez retrouver les statistiques globales
      </Typography>
    </Container>
  );
};

export default StatisticsPage;
