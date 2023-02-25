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
  contact: Contact;
  profile: Profile;
  lodging: Lodging;
}

export interface Contact {
  firstName: string;
  lastName: string;
  mail: string;
  phone: string;
}

export interface Profile {
  age: number;
  gender: string;
  socialSituation: string;
  education: string;
  income: number;
}

export interface Lodging {
  type: string;
  location: string;
  residents: number;
}
