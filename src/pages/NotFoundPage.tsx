import { Container, Link, Typography } from '@mui/material';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { Routes } from '@/types/enums';

const NotFoundPage: FC = () => {
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
      <Typography
        variant="h1"
        textAlign="center"
        gutterBottom
        sx={{ fontSize: '3rem' }}
      >
        Oups, page non trouvée...
      </Typography>
      <Link
        component={NavLink}
        variant="button"
        underline="none"
        to={Routes.Home}
        sx={{ fontSize: '1.4rem', mt: 2, letterSpacing: 1 }}
      >
        Retourner à l'accueil
      </Link>
    </Container>
  );
};

export default NotFoundPage;
