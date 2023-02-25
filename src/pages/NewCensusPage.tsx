import { Container, Typography } from '@mui/material';
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
        mt: -4,
      }}
    >
      <Typography variant="h1" gutterBottom>
        Nouveau recensement
      </Typography>
      <Typography variant="h4">Vous allez remplir un questionnaire</Typography>
    </Container>
  );
};

export default NewCensusPage;
