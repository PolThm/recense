import { Box, Container } from '@mui/material';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import BackButton from '@/components/BackButton';
import CensusFormContact from '@/components/census-forms/CensusFormContact';
import CensusFormLodging from '@/components/census-forms/CensusFormLodging';
import CensusFormProfile from '@/components/census-forms/CensusFormProfile';
import CensusFormSummary from '@/components/census-forms/CensusFormSummary';
import NewCensusLanding from '@/components/NewCensusLanding';
import NextButton from '@/components/NextButton';
import { fakeCensus } from '@/mocks/CensusesMock';
import { addCensus } from '@/store/censusesSlice';
import { FormScreens } from '@/types/enums';
import { Census } from '@/types/interfaces';

const { Landing, Contact, Profile, Lodging, Summary } = FormScreens;

const NewCensusPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [census, setCensus] = useState<Census | null>(null);
  const [currentScreen, setCurrentScreen] = useState(Landing);

  const [firstName, setFirstName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const next = () => {
    if (currentScreen === Summary) {
      const newCensus = fakeCensus;
      newCensus.contact.firstName = firstName;

      // setCensus(newCensus);
      dispatch(addCensus(newCensus));
      navigate('/my-archives');
      return;
    }

    setCurrentScreen(currentScreen + 1);
  };

  return (
    <Box sx={{ height: 1 }}>
      {currentScreen === Landing ? (
        <NewCensusLanding
          startCensus={() => setCurrentScreen(currentScreen + 1)}
        />
      ) : (
        <Container>
          <BackButton onClick={() => setCurrentScreen(currentScreen - 1)} />
          <Box sx={{ my: 2 }}>
            {currentScreen === Contact && (
              <CensusFormContact
                firstName={firstName}
                handleChange={handleChange}
              />
            )}
            {currentScreen === Profile && <CensusFormProfile />}
            {currentScreen === Lodging && <CensusFormLodging />}
            {currentScreen === Summary && <CensusFormSummary />}
          </Box>
          <NextButton
            onClick={next}
            isDisabled={currentScreen === Summary && true}
          >
            {currentScreen === Summary ? 'Envoyer' : 'Suivant'}
          </NextButton>
        </Container>
      )}
    </Box>
  );
};

export default NewCensusPage;
