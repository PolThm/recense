import { Box, Container } from '@mui/material';
import React, { FC, useState } from 'react';

import BackButton from '@/components/BackButton';
import CensusFormContact from '@/components/census-forms/CensusFormContact';
import CensusFormLodging from '@/components/census-forms/CensusFormLodging';
import CensusFormProfile from '@/components/census-forms/CensusFormProfile';
import CensusFormSummary from '@/components/census-forms/CensusFormSummary';
import NewCensusLanding from '@/components/NewCensusLanding';
import NextButton from '@/components/NextButton';
import { Census } from '@/types/interfaces';

enum FormPages {
  Landing = 0,
  Contact = 1,
  Profile = 2,
  Lodging = 3,
  Summary = 4,
}

const { Landing, Contact, Profile, Lodging, Summary } = FormPages;

const NewCensusPage: FC = () => {
  const [census, setCensus] = useState<Census | null>(null);
  const [currentPage, setCurrentPage] = useState(Landing);

  const next = () => {
    if (currentPage === Summary) {
      alert('ENVOYER');
      return;
    }
    setCurrentPage(currentPage + 1);
  };

  return (
    <Box sx={{ height: 1 }}>
      {currentPage === Landing ? (
        <NewCensusLanding startCensus={() => setCurrentPage(currentPage + 1)} />
      ) : (
        <Container>
          <BackButton onClick={() => setCurrentPage(currentPage - 1)} />
          <Box sx={{ my: 2 }}>
            {currentPage === Contact && <CensusFormContact />}
            {currentPage === Profile && <CensusFormProfile />}
            {currentPage === Lodging && <CensusFormLodging />}
            {currentPage === Summary && <CensusFormSummary />}
          </Box>
          <NextButton onClick={next}>
            {currentPage === Summary ? 'Envoyer' : 'Suivant'}
          </NextButton>
        </Container>
      )}
    </Box>
  );
};

export default NewCensusPage;
