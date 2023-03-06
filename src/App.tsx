import { Box } from '@mui/material';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import DemoNotif from '@/components/DemoNotif';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import RouterContent from '@/components/RouterContent';
import { setAllCensuses } from '@/store/censusesSlice';
import { getFirebaseDbAndSetAllCensuses } from '@/utils/firebase-utils';
import { getCensusesFromLocalStorage } from '@/utils/local-storage-utils';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const localCensusesDb = getCensusesFromLocalStorage();
    if (localCensusesDb) {
      dispatch(setAllCensuses(localCensusesDb));
    } else {
      getFirebaseDbAndSetAllCensuses(dispatch);
    }
  }, [dispatch]);

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
