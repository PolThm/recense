import { Button, Container, Typography } from '@mui/material';
import { FC } from 'react';

const NewCensusPage: FC = () => {
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
        Recensement
      </Typography>
      <Typography variant="h4">Vous allez remplir un questionnaire</Typography>
      <Button variant="contained" sx={{ mt: 8 }}>
        Commencer
      </Button>
    </Container>
  );
};

export default NewCensusPage;
