import { MenuItem } from '@mui/material';
import { FC } from 'react';

import MySelect from '@/components/shared/MySelect';
import MyTextInput from '@/components/shared/MyTextInput';
import { Education, Gender, Situation } from '@/types/enums';

const { Male, Female, Other } = Gender;
const { Single, Married, Divorced, Widowed } = Situation;
const { None, Bac, Superior } = Education;

const CensusFormProfile: FC = () => {
  return (
    <>
      <MyTextInput label="Âge" name="age" type="number" />

      <MySelect label="Genre" name="gender">
        <MenuItem value={Male}>{Male}</MenuItem>
        <MenuItem value={Female}>{Female}</MenuItem>
        <MenuItem value={Other}>{Other}</MenuItem>
      </MySelect>

      <MySelect label="Situation" name="situation">
        <MenuItem value={Single}>{Single}</MenuItem>
        <MenuItem value={Married}>{Married}</MenuItem>
        <MenuItem value={Divorced}>{Divorced}</MenuItem>
        <MenuItem value={Widowed}>{Widowed}</MenuItem>
      </MySelect>

      <MySelect label="Éducation" name="education">
        <MenuItem value={None}>{None}</MenuItem>
        <MenuItem value={Bac}>{Bac}</MenuItem>
        <MenuItem value={Superior}>{Superior}</MenuItem>
      </MySelect>

      <MyTextInput label="Revenu annuel" name="income" type="number" />
    </>
  );
};

export default CensusFormProfile;
