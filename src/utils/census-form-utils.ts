import * as yup from 'yup';

import {
  Education,
  FormSteps,
  Gender,
  Location,
  LodgingType,
  Situation,
} from '@/types/enums';
import { CensusForm } from '@/types/interfaces';

const { Contact, Profile, Lodging, Summary } = FormSteps;
const { Male, Female, Other } = Gender;
const { Single, Married, Divorced, Widowed } = Situation;
const { None, Bac, Superior } = Education;
const { House, Apartment } = LodgingType;
const { City, Countryside } = Location;

const contactValidationSchema = yup.object().shape({
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
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Adresse email invalide')
    .max(50, 'Adresse email trop longue')
    .required('Champ requis'),
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
  income: yup
    .number()
    .min(0, 'Revenu invalide')
    .max(1000000000, 'Vous êtes très riche, bravo !')
    .required('Champ requis'),
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
    .max(20, "Vous n'êtes pas pas un peu nombreux ?")
    .required('Champ requis'),
});

const summaryValidationSchema = yup.object().shape({
  consent: yup
    .boolean()
    .required('Champ requis')
    .oneOf([true], "Vous devez accepter les conditions d'utilisation"),
});

export const getValidationSchema = (currentStep: FormSteps) => {
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

export const getFormStepTitle = (currentStep: FormSteps) => {
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

export const formInitialValues: CensusForm = {
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
