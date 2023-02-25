import { Button, Container, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  startCensus: () => void;
};

const NewCensusLanding: FC<Props> = ({ startCensus }) => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 1,
        mt: -1,
      }}
    >
      <Typography variant="h1" gutterBottom>
        Recensement
      </Typography>

      <Typography variant="h2" textAlign="center">
        Vous allez remplir un questionnaire
      </Typography>

      <Button variant="contained" sx={{ mt: 8 }} onClick={startCensus}>
        Commencer
      </Button>
    </Container>
  );
};

export default NewCensusLanding;
