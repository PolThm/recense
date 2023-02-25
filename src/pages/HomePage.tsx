import LogoIcon from '@mui/icons-material/AppRegistration';
import { Box, Button, Container, Typography } from '@mui/material';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const HomePage: FC = () => {
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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'primary.main',
          mb: 3,
          fontSize: { xs: '3rem', sm: '4.5rem', md: '6rem' },
        }}
      >
        <LogoIcon sx={{ mr: 2, fontSize: 'inherit' }} />
        <Typography
          variant="h1"
          noWrap
          sx={{
            mr: 2,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: 5,
            color: 'inherit',
            textDecoration: 'none',
            fontSize: 'inherit',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          RECENSE
        </Typography>
      </Box>
      <Typography
        variant="h2"
        textAlign="center"
        sx={{ fontSize: '2.5rem', mb: 8 }}
      >
        L'application des professionnels du recensement
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: { xs: 4, md: 8 },
        }}
      >
        <Button
          component={NavLink}
          to="/new-census"
          variant="contained"
          color="secondary"
        >
          RECENSEMENT
        </Button>
        <Button component={NavLink} to="/statistics" variant="outlined">
          STATISTIQUES
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
