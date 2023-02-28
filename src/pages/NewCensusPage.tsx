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
import {
  Education,
  FormSteps,
  Gender,
  Location,
  LodgingType,
  Routes,
  Situation,
} from '@/types/enums';
import { Census, CensusForm } from '@/types/interfaces';

const { Landing, Contact, Profile, Lodging, Summary } = FormSteps;
const { Male, Female, Other } = Gender;
const { Single, Married, Divorced, Widowed } = Situation;
const { None, Bac, Superior } = Education;
const { House, Apartment } = LodgingType;
const { City, Countryside } = Location;

const CENSUS_ID = Date.now();
const DATE_OF_DAY = new Date().toLocaleDateString('fr-FR');

const formInitialValues: CensusForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  age: '',
  gender: '',
  situation: '',
  education: '',
  income: '',
  lodgingType: '',
  location: '',
  residents: '',
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
  age: yup
    .number()
    .min(18, 'Doit être majeur')
    .max(120, 'Vous êtes trop vieux, non ?')
    .required('Champ requis'),
  gender: yup
    .string()
    .oneOf([Male, Female, Other], 'Genre invalide')
    .required('Champ requis'),
  situation: yup
    .string()
    .oneOf([Single, Married, Divorced, Widowed], 'Situation invalide')
    .required('Champ requis'),
  education: yup
    .string()
    .oneOf([None, Bac, Superior], 'Éducation invalide')
    .required('Champ requis'),
  income: yup.number().min(0, 'Revenu invalide').required('Champ requis'),
});

const lodgingValidationSchema = yup.object().shape({
  lodgingType: yup
    .string()
    .oneOf([House, Apartment], 'Logement invalide')
    .required('Champ requis'),
  location: yup
    .string()
    .oneOf([City, Countryside], 'Lieu invalide')
    .required('Champ requis'),
  residents: yup
    .number()
    .min(1, 'Doit être au moins 1')
    .max(20, 'Vous êtes trop nombreux, non ?')
    .required('Champ requis'),
});

const summaryValidationSchema = yup.object().shape({
  consent: yup
    .boolean()
    .required('Champ requis')
    .oneOf([true], "Vous devez accepter les conditions d'utilisation"),
});

const NewCensusPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(Landing);
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

  const setCensusWithNewStepData = ({
    firstName,
    lastName,
    email,
    phone,
    age,
    gender,
    situation,
    education,
    income,
    lodgingType,
    location,
    residents,
    consent,
  }: CensusForm) => {
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
        age: Number(age),
        gender,
        situation,
        education,
        income: Number(income),
      },
      lodging: {
        lodgingType,
        location,
        residents: Number(residents),
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
        return lodgingValidationSchema;
      case Summary:
        return summaryValidationSchema;
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
            onSubmit={(stepData) => {
              setCensusWithNewStepData(stepData);
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
