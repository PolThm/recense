import { Census } from '@/types/interfaces';

const censusMock: Census = {
  id: 1,
  date: '22/01/2023',
  consent: true,
  firstName: 'Jean',
  lastName: 'Dupont',
  email: 'jean.dupont@email.com',
  phone: '0123456789',
  age: 35,
  gender: 'Homme',
  situation: 'Marié(e)',
  education: 'Diplôme étude supérieures',
  income: 45000,
  lodgingType: 'Appartement',
  location: 'Ville',
  residents: 2,
};

export default censusMock;
