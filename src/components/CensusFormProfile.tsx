import { MenuItem } from '@mui/material';
import { FC } from 'react';

import MyCheckbox from '@/components/shared/MyCheckbox';
import MySelect from '@/components/shared/MySelect';

type Props = {};

const CensusFormProfile: FC<Props> = ({}) => {
  return (
    <>
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

export default CensusFormProfile;
