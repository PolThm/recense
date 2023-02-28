import { MenuItem } from '@mui/material';
import { FC } from 'react';

import MySelect from '@/components/shared/MySelect';
import MyTextInput from '@/components/shared/MyTextInput';
import { Location, LodgingType } from '@/types/enums';

const { House, Apartment } = LodgingType;
const { City, Countryside } = Location;

const CensusFormLodging: FC = () => {
  return (
    <>
      <MySelect label="Type de logement" name="lodgingType">
        <MenuItem value={House}>{House}</MenuItem>
        <MenuItem value={Apartment}>{Apartment}</MenuItem>
      </MySelect>

      <MySelect label="Lieu" name="location">
        <MenuItem value={City}>{City}</MenuItem>
        <MenuItem value={Countryside}>{Countryside}</MenuItem>
      </MySelect>

      <MyTextInput label="Nombre de résidents" name="residents" type="number" />
    </>
  );
};

export default CensusFormLodging;
