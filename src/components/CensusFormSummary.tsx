import { Box } from '@mui/material';
import { FC } from 'react';

import CensusSummary from '@/components/CensusSummary';
import MyCheckbox from '@/components/shared/MyCheckbox';
import { Census } from '@/types/interfaces';

type Props = {
  census: Census;
};

const CensusFormSummary: FC<Props> = ({ census }) => {
  return (
    <>
      <Box sx={{ my: 3 }}>
        <CensusSummary census={census} />
      </Box>

      <MyCheckbox name="consent">
        L'utilisateur accepte les conditions d'utilisation
      </MyCheckbox>
    </>
  );
};

export default CensusFormSummary;
