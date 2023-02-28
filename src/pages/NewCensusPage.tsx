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
import { CensusForm } from '@/types/interfaces';

const { Landing, Contact, Profile, Lodging, Summary } = FormSteps;

const NewCensusPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(Landing);
  const [census, setCensus] = useState<CensusForm>(formInitialValues);

  const getFormattedNewCensus = () => {
    if (!census) throw new Error('Census is null');
    return {
      ...census,
      id: Date.now(),
      date: new Date().toLocaleDateString('fr-FR'),
      age: Number(census.age),
      income: Number(census.income),
      residents: Number(census.residents),
    };
  };

  const next = () => {
    if (currentStep !== Summary) return setCurrentStep(currentStep + 1);
    dispatch(addCensus(getFormattedNewCensus()));
    return navigate(Routes.MyArchives);
  };

  const setCensusWithNewStepData = (newStepData: CensusForm) => {
    const newFilteredData = Object.fromEntries(
      Object.entries(newStepData).filter(([_, data]) => data !== '')
    );
    setCensus({ ...census, ...newFilteredData });
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
            key={currentStep}
            initialValues={census}
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
                    <CensusFormSummary census={getFormattedNewCensus()} />
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
