import { Box, Container } from '@mui/material';
import React, { FC, useState } from 'react';

import CensusFormContact from '@/components/census-forms/CensusFormContact';
import CensusFormLodging from '@/components/census-forms/CensusFormLodging';
import CensusFormProfile from '@/components/census-forms/CensusFormProfile';
import NewCensusLanding from '@/components/NewCensusLanding';
import { Census } from '@/types/interfaces';

const NewCensusPage: FC = () => {
  const [census, setCensus] = useState<Census | null>(null);

  return (
    <Box sx={{ height: 1 }}>
      {!census ? (
        <NewCensusLanding />
      ) : (
        <Container>
          <CensusFormContact />
          <CensusFormProfile />
          <CensusFormLodging />
        </Container>
      )}
    </Box>
  );
};

export default NewCensusPage;
