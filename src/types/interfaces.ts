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
  employeeName: string;
  registeredPerson: RegisteredPerson;
}

export interface RegisteredPerson {
  firstName: string;
  lastName: string;
  age: number | null;
}
