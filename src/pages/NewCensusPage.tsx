import { Box, Button, Container, Typography } from '@mui/material';
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
import { addCensus } from '@/store/censusesSlice';
import { FormSteps, Routes } from '@/types/enums';
import { Census } from '@/types/interfaces';

const { Landing, Contact, Profile, Lodging, Summary } = FormSteps;

const CENSUS_ID = Date.now();
const DATE_OF_DAY = new Date().toLocaleDateString('fr-FR');

const formInitialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  age: null,
  gender: '',
  situation: '',
  education: '',
  income: null,
  type: '',
  location: '',
  residents: null,
  consent: false,
};

const contactValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .max(15, 'Doit faire 15 caractères ou moins')
    .required('Champ requis'),
  lastName: yup
    .string()
    .max(20, 'Doit faire 20 caractères ou moins')
    .required('Champ requis'),
  email: yup.string().email('Adresse email invalide').required('Champ requis'),
  phone: yup.string().matches(/^(\+33|0)[1-9](\d{2}){4}$/, 'Numéro invalide'),
});

const profileValidationSchema = yup.object().shape({
  consent: yup
    .boolean()
    .required('Champ requis')
    .oneOf([true], "Vous devez accepter les conditions d'utilisation"),
  // jobType: yup
  //   .string()
  //   .oneOf(
  //     ['designer', 'development', 'product', 'other'],
  //     'Type de métier invalide'
  //   )
  //   .required('Champ requis'),
});

const NewCensusPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // TODO: Put back Landing by default
  const [currentStep, setCurrentStep] = useState(Profile);
  const [census, setCensus] = useState<Census | null>(null);

  const next = () => {
    if (currentStep !== Summary) return setCurrentStep(currentStep + 1);

    if (!census) throw new Error('Census is null');
    dispatch(addCensus(census));
    return navigate(Routes.MyArchives);
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

  const setPartOfCensus = (values: any) => {
    const {
      firstName,
      lastName,
      email,
      phone,
      age,
      gender,
      situation,
      education,
      income,
      type,
      location,
      residents,
      consent,
    } = values;

    const newCensus = {
      id: CENSUS_ID,
      date: DATE_OF_DAY,
      consent,
      contact: {
        firstName,
        lastName,
        email,
        phone,
      },
      profile: {
        age,
        gender,
        situation,
        education,
        income,
      },
      lodging: {
        type,
        location,
        residents,
      },
    };

    setCensus(newCensus);
  };

  const getValidationSchema = () => {
    switch (currentStep) {
      case Contact:
        return contactValidationSchema;
      case Profile:
        return profileValidationSchema;
      case Lodging:
        return {};
      case Summary:
        return {};
      default:
        return {};
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
              mb: { xs: -7, sm: -6 },
              fontSize: { xs: '2.2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            {getStepTitle()}
          </Typography>
          <Formik
            initialValues={formInitialValues}
            validationSchema={getValidationSchema()}
            onSubmit={(censusData) => {
              console.log(JSON.stringify(censusData, null, 2));

              setPartOfCensus(censusData);
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
                  {currentStep === Summary && census && (
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
