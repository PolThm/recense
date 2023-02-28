import { FC } from 'react';

export interface Route {
  key: string;
  title: string;
  path: string;
  component: FC;
}

export interface Census {
  id: number | null;
  date: string;
  consent: boolean;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  age: number | null;
  gender: string;
  situation: string;
  education: string;
  income: number | null;
  lodgingType: string;
  location: string;
  residents: number | null;
}

export interface CensusForm {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  age: string;
  gender: string;
  situation: string;
  education: string;
  income: string;
  lodgingType: string;
  location: string;
  residents: string;
  consent: boolean;
}
