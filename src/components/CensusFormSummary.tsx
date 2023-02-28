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
    <Box
      sx={{
        mt: 1,
        mb: -5,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        justifyContent: 'space-around',
        flex: 1,
      }}
    >
      <CensusSummary census={census} />
      <MyCheckbox name="consent">
        L'utilisateur accepte les conditions d'utilisation
      </MyCheckbox>
    </Box>
  );
};

export default CensusFormSummary;
