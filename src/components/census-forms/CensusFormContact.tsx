import { FC } from 'react';

import MyTextInput from '@/components/shared/MyTextInput';

const CensusFormContact: FC = () => {
  return (
    <>
      <MyTextInput label="Prénom" name="firstName" type="text" />

      <MyTextInput label="Nom" name="lastName" type="text" />

      <MyTextInput
        label="Email"
        name="email"
        type="email"
        placeholder="email@test.fr"
      />

      <MyTextInput label="Téléphone (optionnel)" name="phone" type="tel" />
    </>
  );
};

export default CensusFormContact;
