import { Box, Container } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CensusFormContact from '@/components/census-forms/CensusFormContact';
import CensusFormLodging from '@/components/census-forms/CensusFormLodging';
import CensusFormProfile from '@/components/census-forms/CensusFormProfile';
import CensusFormSummary from '@/components/census-forms/CensusFormSummary';
import NewCensusLanding from '@/components/NewCensusLanding';
import BackButton from '@/components/shared/BackButton';
import NextButton from '@/components/shared/NextButton';
import { fakeCensus } from '@/mocks/CensusesMock';
import { addCensus } from '@/store/censusesSlice';
import { FormSteps, Routes } from '@/types/enums';
import { Census } from '@/types/interfaces';

const { Landing, Contact, Profile, Lodging, Summary } = FormSteps;

const defaultCensus: Census = {
  id: null,
  date: '',
  consent: false,
  contact: {
    firstName: '',
    lastName: '',
    mail: '',
    phone: '',
  },
  profile: {
    age: null,
    gender: '',
    situation: '',
    education: '',
    income: null,
  },
  lodging: {
    type: '',
    location: '',
    residents: null,
  },
};

const NewCensusPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentScreen, setCurrentScreen] = useState(Landing);
  const [census, setCensus] = useState<Census>(defaultCensus);
  const { id, date, consent, contact, profile, lodging } = census;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // set first name for this example
    const firstName = e.target.value;
    setCensus({ ...census, contact: { ...contact, firstName } });
  };

  const next = () => {
    if (currentScreen === Summary) {
      fakeCensus.contact.firstName = census.contact.firstName;
      dispatch(addCensus(fakeCensus));

      // TODO: Add real census and remove line above
      // dispatch(addCensus(census));
      navigate(Routes.MyArchives);
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
          <Box
            sx={{
              my: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {currentScreen === Contact && (
              <CensusFormContact
                firstName={contact.firstName}
                handleChange={handleChange}
              />
            )}
            {currentScreen === Profile && <CensusFormProfile />}
            {currentScreen === Lodging && <CensusFormLodging />}
            {currentScreen === Summary && <CensusFormSummary census={census} />}
            <Box sx={{ mt: 2 }}>
              <NextButton
                onClick={next}
                isDisabled={currentScreen === Summary && consent}
              >
                {currentScreen === Summary ? 'Envoyer' : 'Suivant'}
              </NextButton>
            </Box>
          </Box>
        </Container>
      )}
    </Box>
  );
};

export default NewCensusPage;
