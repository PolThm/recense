import { Button, Container, Typography } from '@mui/material';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import RandomJoke from '@/components/RandomJoke';
import { Routes } from '@/types/enums';

const NotFoundPage: FC = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        height: 1,
        mt: -3,
      }}
    >
      <Typography
        variant="h1"
        textAlign="center"
        gutterBottom
        sx={{ fontSize: '3rem' }}
      >
        Oups, page non trouvée...
      </Typography>

      <RandomJoke />

      <Button component={NavLink} to={Routes.Home} variant="contained">
        Retourner à l'accueil
      </Button>
    </Container>
  );
};

export default NotFoundPage;
