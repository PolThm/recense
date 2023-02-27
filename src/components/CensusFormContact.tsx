import { FC } from 'react';

import MyTextInput from '@/components/shared/MyTextInput';

const CensusFormContact: FC = () => {
  return (
    <>
      <MyTextInput
        label="Prénom"
        name="contact.firstName"
        type="text"
        placeholder="Jane"
      />

      <MyTextInput
        label="Nom"
        name="contact.lastName"
        type="text"
        placeholder="Doe"
      />

      <MyTextInput
        label="Adresse email"
        name="contact.email"
        type="email"
        placeholder="jane@formik.com"
      />

      <MyTextInput
        label="Téléphone"
        name="contact.phone"
        type="tel"
        placeholder="jane@formik.com"
      />
    </>
  );
};

export default CensusFormContact;
