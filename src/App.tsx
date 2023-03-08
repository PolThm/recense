import { Box } from '@mui/material';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import DemoNotif from '@/components/DemoNotif';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import RouterContent from '@/components/RouterContent';
import { useFetchCensusesQuery } from '@/store/apiSlice';
import { setAllCensuses } from '@/store/censusesSlice';
import { Queries } from '@/types/enums';
import { getCensusesFromLocalStorage } from '@/utils/local-storage-utils';

const App: FC = () => {
  const dispatch = useDispatch();
  const { data: dbCensuses } = useFetchCensusesQuery(Queries.Censuses);

  useEffect(() => {
    const localCensuses = getCensusesFromLocalStorage();
    if (localCensuses) {
      dispatch(setAllCensuses(localCensuses));
    } else if (dbCensuses) {
      dispatch(setAllCensuses(dbCensuses));
    }
  }, [dispatch, dbCensuses]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh" // dvh fallback
      sx={{ height: '100dvh' }}
    >
      <Navbar />
      <RouterContent />
      <Footer />
      <DemoNotif />
    </Box>
  );
};

export default App;
