import { Box, Typography } from '@mui/material';
import { FC, useState } from 'react';

import CensusSummary from '@/components/CensusSummary';
import MyCheckbox from '@/components/shared/MyCheckbox';
import { Census } from '@/types/interfaces';

type Props = {
  census: Census;
};

const CensusFormSummary: FC<Props> = ({ census }) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Typography variant="h2" component="h1">
        Récapitulatif
      </Typography>
      <Box sx={{ width: 500, my: 3 }}>
        <CensusSummary census={census} />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          id="confirm"
          name="confirm"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <label htmlFor="confirm">
          L'utilisateur confirme d'envoyer ses données
        </label>

        {/* <MyCheckbox name="acceptedTerms"> */}
        {/*   I accept the terms and conditions */}
        {/* </MyCheckbox> */}
      </Box>
    </>
  );
};

export default CensusFormSummary;
