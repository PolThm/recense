import { Box, Container } from '@mui/material';
import React, { FC, useState } from 'react';

import BackButton from '@/components/BackButton';
import CensusFormContact from '@/components/census-forms/CensusFormContact';
import CensusFormLodging from '@/components/census-forms/CensusFormLodging';
import CensusFormProfile from '@/components/census-forms/CensusFormProfile';
import NewCensusLanding from '@/components/NewCensusLanding';
import { Census } from '@/types/interfaces';

const NewCensusPage: FC = () => {
  const [census, setCensus] = useState<Census | null>(null);
  const [isStarted, setIsStarted] = useState(false);

  return (
    <Box sx={{ height: 1 }}>
      {!isStarted ? (
        <NewCensusLanding startCensus={() => setIsStarted(true)} />
      ) : (
        <Container>
          <BackButton onClick={() => setIsStarted(false)} />
          <Box sx={{ mt: 2 }}>
            <CensusFormContact />
            <CensusFormProfile />
            <CensusFormLodging />
          </Box>
        </Container>
      )}
    </Box>
  );
};

export default NewCensusPage;
