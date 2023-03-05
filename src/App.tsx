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
import { setAllCensuses, setIsLoading } from '@/store/censusesSlice';

import { database } from '../firebase';

const App: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const getDbAndSetAllCensuses = useCallback(async () => {
    let timeoutId: NodeJS.Timeout;

    try {
      dispatch(setIsLoading(true));
      const snapshot = await get(child(ref(database), 'censuses'));
      if (snapshot.exists()) dispatch(setAllCensuses(snapshot.val()));
    } catch (error) {
      console.error(error);
    } finally {
      timeoutId = setTimeout(() => dispatch(setIsLoading(false)), 500);
    }

    return () => clearTimeout(timeoutId);
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
