import { Census } from '@/types/interfaces';

const censusesMock: Census[] = [
  {
    id: 1,
    date: '2023-01-22',
    consent: true,
    contact: {
      firstName: 'Jean',
      lastName: 'Dupont',
      mail: 'jean.dupont@email.com',
      phone: '0123456789',
    },
    profile: {
      age: 35,
      gender: 'homme',
      situation: 'marié',
      education: 'diplôme étude supérieures',
      income: 45000,
    },
    lodging: {
      type: 'appartement',
      location: 'Ville',
      residents: 2,
    },
  },
  {
    id: 2,
    date: '2023-02-14',
    consent: true,
    contact: {
      firstName: 'Marie',
      lastName: 'Durand',
      mail: 'marie.durand@email.com',
      phone: undefined,
    },
    profile: {
      age: 45,
      gender: 'femme',
      situation: 'célibataire',
      education: 'baccalauréat',
      income: null,
    },
    lodging: {
      type: 'maison',
      location: 'Campagne',
      residents: 4,
    },
  },
  {
    id: 3,
    date: '2023-02-20',
    consent: true,
    contact: {
      firstName: 'Pierre',
      lastName: 'Martin',
      mail: 'pierre.martin@email.com',
      phone: '0678901234',
    },
    profile: {
      age: 28,
      gender: 'homme',
      situation: 'marié',
      education: 'sans diplôme',
      income: 28000,
    },
    lodging: {
      type: 'appartement',
      location: 'Campagne',
      residents: 1,
    },
  },
];

export const fakeCensus: Census = {
  id: 4,
  date: '2023-02-26',
  consent: true,
  contact: {
    firstName: '',
    lastName: 'Fake Name',
    mail: 'fake.census@email.com',
    phone: '0456789012',
  },
  profile: {
    age: 60,
    gender: 'homme',
    situation: 'marié',
    education: 'baccalauréat',
    income: 15000,
  },
  lodging: {
    type: 'appartement',
    location: 'Ville',
    residents: 1,
  },
};

export default censusesMock;
