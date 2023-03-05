import { Box, Paper } from '@mui/material';
import { child, get, ref } from 'firebase/database';
import { AnimatePresence, motion } from 'framer-motion';
import { FC, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';

import DemoNotif from '@/components/DemoNotif';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import NotFoundPage from '@/pages/NotFoundPage';
import appRoutes from '@/routes';
import { setAllCensuses } from '@/store/censusesSlice';

import { database } from '../firebase';

const App: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const getDbAndSetAllCensuses = useCallback(() => {
    const dbRef = ref(database);
    get(child(dbRef, 'censuses'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          dispatch(setAllCensuses(snapshot.val()));
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dispatch]);

  useEffect(() => {
    getDbAndSetAllCensuses();
  }, [getDbAndSetAllCensuses]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh" // dvh fallback
      sx={{ height: '100dvh' }}
    >
      <Navbar />
      <Paper
        elevation={3}
        sx={{ p: 2, flex: 1 }}
        style={{ animation: 'fadein 2s ease' }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={location.pathname}
            style={{ height: '100%' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Routes location={location} key={location.pathname}>
              {appRoutes.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
      </Paper>
      <Footer />
      <DemoNotif />
    </Box>
  );
};

export default App;
