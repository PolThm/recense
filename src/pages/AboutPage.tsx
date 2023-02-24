import { Container, Typography } from '@mui/material';
import React, { FC } from 'react';

const AboutPage: FC = () => {
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
        À propos
      </Typography>
      <Typography variant="h2">Voici une autre page</Typography>
    </Container>
  );
};

export default AboutPage;
