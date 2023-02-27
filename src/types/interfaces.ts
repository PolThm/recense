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
  contact: Contact;
  profile: Profile;
  lodging: Lodging;
}

export interface Contact {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

export interface Profile {
  age: number | null;
  gender: string;
  situation: string;
  education: string;
  income: number | null;
}

export interface Lodging {
  type: string;
  location: string;
  residents: number | null;
}
