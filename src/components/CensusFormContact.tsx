import { Typography } from '@mui/material';
import { FC } from 'react';

import MyTextInput from '@/components/shared/MyTextInput';

type Props = {
  title: string;
};

const CensusFormContact: FC<Props> = ({ title }) => {
  return (
    <>
      <Typography variant="h5" component="h2" gutterBottom textAlign="center">
        {title}
      </Typography>

      <MyTextInput label="Prénom" name="firstName" type="text" />

      <MyTextInput label="Nom" name="lastName" type="text" />

      <MyTextInput
        label="Adresse email"
        name="email"
        type="email"
        placeholder="email@test.fr"
      />

      <MyTextInput label="Téléphone (optionnel)" name="phone" type="tel" />
    </>
  );
};

export default CensusFormContact;
