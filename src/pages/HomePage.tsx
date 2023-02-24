import { Container, Typography } from '@mui/material';
import { FC } from 'react';

const HomePage: FC = () => {
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
        Bienvenue
      </Typography>
      <Typography variant="h2">Vous êtes sur une Web App</Typography>
    </Container>
  );
};

export default HomePage;
