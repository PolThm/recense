import { MenuItem } from '@mui/material';
import { FC } from 'react';

import MyCheckbox from '@/components/shared/MyCheckbox';
import MySelect from '@/components/shared/MySelect';

const CensusFormProfile: FC = () => {
  return (
    <>
      <MySelect label="Job Type" name="jobType">
        <MenuItem value="">Select a job type</MenuItem>
        <MenuItem value="designer">Designer</MenuItem>
        <MenuItem value="development">Developer</MenuItem>
        <MenuItem value="product">Product Manager</MenuItem>
        <MenuItem value="other">Other</MenuItem>
      </MySelect>

      <MyCheckbox name="consent">
        L'utilisateur accepte les conditions d'utilisation
      </MyCheckbox>
    </>
  );
};

export default CensusFormProfile;
