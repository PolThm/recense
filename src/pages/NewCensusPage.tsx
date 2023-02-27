import { Box, Button, Container, MenuItem } from '@mui/material';
import { Form, Formik } from 'formik';
import { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import CensusFormContact from '@/components/CensusFormContact';
import CensusFormLodging from '@/components/CensusFormLodging';
import CensusFormProfile from '@/components/CensusFormProfile';
import CensusFormSummary from '@/components/CensusFormSummary';
import NewCensusLanding from '@/components/NewCensusLanding';
import BackButton from '@/components/shared/BackButton';
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

  // TODO: Put back Landing by default
  const [currentScreen, setCurrentScreen] = useState(Contact);
  const [census, setCensus] = useState<Census>(defaultCensus);
  const { id, date, consent, contact, profile, lodging } = census;

  const handleChange = (firstName: string) => {
    // set first name for this example
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
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              acceptedTerms: false, // added for our checkbox
              jobType: '', // added for our select
            }}
            validationSchema={yup.object({
              firstName: yup
                .string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
              lastName: yup
                .string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
              email: yup
                .string()
                .email('Invalid email address')
                .required('Required'),
              acceptedTerms: yup
                .boolean()
                .required('Required')
                .oneOf([true], 'You must accept the terms and conditions.'),
              jobType: yup
                .string()
                .oneOf(
                  ['designer', 'development', 'product', 'other'],
                  'Invalid Job Type'
                )
                .required('Required'),
            })}
            onSubmit={(values) => {
              console.log(JSON.stringify(values, null, 2));
              next();
            }}
          >
            <Form>
              <Container
                maxWidth="sm"
                sx={{ my: 2, display: 'flex', flexDirection: 'column', gap: 3 }}
              >
                {currentScreen === Contact && <CensusFormContact />}
                {currentScreen === Profile && <CensusFormProfile />}
                {currentScreen === Lodging && <CensusFormLodging />}
                {currentScreen === Summary && (
                  <CensusFormSummary census={census} />
                )}

                <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                  {currentScreen === Summary ? 'Envoyer' : 'Suivant'}
                </Button>
              </Container>
            </Form>
          </Formik>
        </Container>
      )}
    </Box>
  );
};

export default NewCensusPage;
