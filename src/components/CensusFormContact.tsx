import { FC } from 'react';

import MyTextInput from '@/components/shared/MyTextInput';

const CensusFormContact: FC = () => {
  return (
    <>
      <MyTextInput
        label="Prénom"
        name="firstName"
        type="text"
        placeholder="Jane"
      />

      <MyTextInput label="Nom" name="lastName" type="text" placeholder="Doe" />

      <MyTextInput
        label="Adresse email"
        name="email"
        type="email"
        placeholder="jane@formik.com"
      />

      <MyTextInput
        label="Téléphone"
        name="phone"
        type="tel"
        placeholder="jane@formik.com"
      />
    </>
  );
};

export default CensusFormContact;
