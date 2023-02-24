import { Container, Link, Typography } from '@mui/material';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const NotFoundPage: FC = () => {
  return (
    <Container
      sx={{
        height: 1,
        mt: -4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1" gutterBottom sx={{ fontSize: '3rem' }}>
        Oups, page non trouvée...
      </Typography>
      <Link
        component={NavLink}
        variant="button"
        underline="none"
        to="/"
        sx={{ fontSize: '1.4rem', mt: 2, letterSpacing: 1 }}
      >
        Retourner à l'accueil
      </Link>
    </Container>
  );
};

export default NotFoundPage;
