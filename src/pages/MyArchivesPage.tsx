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
      <Typography variant="h1" textAlign='center' gutterBottom>
        Mes Archives
      </Typography>
      <Typography variant="h4" textAlign='center'>
        Voici une autre page ou vous pourrez retrouver tous vos recensements
      </Typography>
    </Container>
  );
};

export default StatisticsPage;
