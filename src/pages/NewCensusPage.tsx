import { Box, Button, Container, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CensusFormContact from '@/components/census-forms/CensusFormContact';
import CensusFormLodging from '@/components/census-forms/CensusFormLodging';
import CensusFormProfile from '@/components/census-forms/CensusFormProfile';
import CensusFormSummary from '@/components/census-forms/CensusFormSummary';
import NewCensusLanding from '@/components/NewCensusLanding';
import BackButton from '@/components/shared/BackButton';
import {
  formInitialValues,
  getFormStepTitle,
  getValidationSchema,
} from '@/helpers/censusFormHelper';
import { addCensus } from '@/store/censusesSlice';
import { FormSteps, Routes } from '@/types/enums';
import { Census, CensusForm } from '@/types/interfaces';

const { Landing, Contact, Profile, Lodging, Summary } = FormSteps;

const CENSUS_ID = Date.now();
const TODAY_DATE = new Date().toLocaleDateString('fr-FR');

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

  const setCensusWithNewStepData = (c: CensusForm) => {
    setCensus({
      id: CENSUS_ID,
      date: TODAY_DATE,
      consent: c.consent,
      contact: {
        firstName: c.firstName,
        lastName: c.lastName,
        email: c.email,
        phone: c.phone,
      },
      profile: {
        age: Number(c.age),
        gender: c.gender,
        situation: c.situation,
        education: c.education,
        income: Number(c.income),
      },
      lodging: {
        lodgingType: c.lodgingType,
        location: c.location,
        residents: Number(c.residents),
      },
    });
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
            {getFormStepTitle(currentStep)}
          </Typography>
          <Formik
            initialValues={formInitialValues}
            validationSchema={getValidationSchema(currentStep)}
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
