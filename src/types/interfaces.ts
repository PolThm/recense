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

export interface CensusForm
  extends Omit<Census, 'id' | 'date' | 'age' | 'income' | 'residents'> {
  age?: string;
  income?: string;
  residents?: string;
}
