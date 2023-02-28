import { Census } from '@/types/interfaces';

const censusesMock: Census[] = [
  {
    id: 1,
    date: '22/01/2023',
    consent: true,
    contact: {
      firstName: 'Jean',
      lastName: 'Dupont',
      email: 'jean.dupont@email.com',
      phone: '0123456789',
    },
    profile: {
      age: 35,
      gender: 'Homme',
      situation: 'Marié(e)',
      education: 'Diplôme étude supérieures',
      income: 45000,
    },
    lodging: {
      lodgingType: 'Appartement',
      location: 'Ville',
      residents: 2,
    },
  },
  {
    id: 2,
    date: '14/02/2023',
    consent: true,
    contact: {
      firstName: 'Marie',
      lastName: 'Durand',
      email: 'marie.durand@email.com',
      phone: undefined,
    },
    profile: {
      age: 45,
      gender: 'Femme',
      situation: 'Célibataire',
      education: 'Baccalauréat',
      income: 0,
    },
    lodging: {
      lodgingType: 'Maison',
      location: 'Campagne',
      residents: 4,
    },
  },
  {
    id: 3,
    date: '20/02/2023',
    consent: true,
    contact: {
      firstName: 'Pierre',
      lastName: 'Martin',
      email: 'pierre.martin@email.com',
      phone: '0678901234',
    },
    profile: {
      age: 28,
      gender: 'Homme',
      situation: 'Veuf/Veuve',
      education: 'Sans diplôme',
      income: 28000,
    },
    lodging: {
      lodgingType: 'Appartement',
      location: 'Campagne',
      residents: 1,
    },
  },
];

export default censusesMock;
