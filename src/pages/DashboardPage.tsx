import { Container, Typography } from '@mui/material';
import React, { FC } from 'react';

const DashboardPage: FC = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 1,
        mt: -4,
      }}
    >
      <Typography variant="h1" gutterBottom>
        Tableau de bord
      </Typography>
      <Typography variant="h4">
        Voici une autre page ou vous pourrez retrouver vos précedents
        recensement et les statistiques globales
      </Typography>
    </Container>
  );
};

export default DashboardPage;
