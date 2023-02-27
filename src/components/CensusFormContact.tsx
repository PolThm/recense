import { MenuItem } from '@mui/material';
import { FC } from 'react';

import MyCheckbox from '@/components/shared/MyCheckbox';
import MySelect from '@/components/shared/MySelect';
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
        name="email"
        type="email"
        placeholder="jane@formik.com"
      />

      <MySelect label="Job Type" name="jobType">
        <MenuItem value="">Select a job type</MenuItem>
        <MenuItem value="designer">Designer</MenuItem>
        <MenuItem value="development">Developer</MenuItem>
        <MenuItem value="product">Product Manager</MenuItem>
        <MenuItem value="other">Other</MenuItem>
      </MySelect>

      <MyCheckbox name="acceptedTerms">
        I accept the terms and conditions
      </MyCheckbox>
    </>
  );
};

export default CensusFormContact;
