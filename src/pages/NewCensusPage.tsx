import { Box, Button, Container, MenuItem, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { FC, useState } from 'react';
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
    email: '',
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

const formInitialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};

const NewCensusPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // TODO: Put back Landing by default
  const [currentStep, setCurrentStep] = useState(Contact);
  const [census, setCensus] = useState<Census>(defaultCensus);
  const { id, date, consent, contact, profile, lodging } = census;

  const handleChange = (firstName: string) => {
    // set first name for this example
    setCensus({ ...census, contact: { ...contact, firstName } });
  };

  const next = () => {
    if (currentStep === Summary) {
      fakeCensus.contact.firstName = census.contact.firstName;
      dispatch(addCensus(fakeCensus));

      // TODO: Add real census and remove line above
      // dispatch(addCensus(census));
      navigate(Routes.MyArchives);
      return;
    }

    setCurrentStep(currentStep + 1);
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case Contact:
        return 'Vos coordonnées';
      case Profile:
        return 'Votre profil';
      case Lodging:
        return 'Votre hébergement';
      case Summary:
        return 'Récapitulatif';
      default:
        return '';
    }
  };

  const setCensusStep = (values: any) => {
    switch (currentStep) {
      case Contact:
        setCensus({ ...census, contact: values });
        break;
      case Profile:
        setCensus({ ...census, profile: values });
        break;
      case Lodging:
        setCensus({ ...census, lodging: values });
        break;
      case Summary:
        setCensus({ ...census, consent: values.acceptedTerms });
        break;
      default:
        break;
    }
  };

  return (
    <Container sx={{ height: 1 }}>
      {currentStep === Landing ? (
        <NewCensusLanding startCensus={() => setCurrentStep(currentStep + 1)} />
      ) : (
        <>
          <BackButton onClick={() => setCurrentStep(currentStep - 1)} />
          <Typography
            variant="h2"
            component="h1"
            textAlign="center"
            sx={{
              pt: 5,
              mb: { xs: -8, sm: -6 },
              fontSize: { xs: '2.2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            {getStepTitle()}
          </Typography>
          <Formik
            initialValues={formInitialValues}
            validationSchema={yup.object({
              firstName: yup
                .string()
                .max(15, 'Doit faire 15 caractères ou moins')
                .required('Champ requis'),
              lastName: yup
                .string()
                .max(20, 'Doit faire 20 caractères ou moins')
                .required('Champ requis'),
              email: yup
                .string()
                .email('Adresse email invalide')
                .required('Champ requis'),
              phone: yup
                .string()
                .matches(/^(\+33|0)[1-9](\d{2}){4}$/, 'Numéro invalide'),
              // consent: yup
              //   .boolean()
              //   .required('Champ requis')
              //   .oneOf(
              //     [true],
              //     "Vous devez accepter les conditions d'utilisation"
              //   ),
              // jobType: yup
              //   .string()
              //   .oneOf(
              //     ['designer', 'development', 'product', 'other'],
              //     'Type de métier invalide'
              //   )
              //   .required('Champ requis'),
            })}
            onSubmit={(values) => {
              console.log(JSON.stringify(values, null, 2));

              setCensusStep(values);
              next();
            }}
          >
            <Form style={{ height: '100%' }}>
              <Container
                maxWidth="sm"
                sx={{
                  py: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: 1,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: 3,
                    flex: 1,
                  }}
                >
                  {currentStep === Contact && <CensusFormContact />}
                  {currentStep === Profile && <CensusFormProfile />}
                  {currentStep === Lodging && <CensusFormLodging />}
                  {currentStep === Summary && (
                    <CensusFormSummary census={census} />
                  )}
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 6,
                  }}
                >
                  {currentStep === Summary ? 'Envoyer' : 'Suivant'}
                </Button>
              </Container>
            </Form>
          </Formik>
        </>
      )}
    </Container>
  );
};

export default NewCensusPage;
