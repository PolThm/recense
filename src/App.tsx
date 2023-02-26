import { Box, Paper } from '@mui/material';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import censusesMock from '@/mocks/CensusesMock';
import NotFoundPage from '@/pages/NotFoundPage';
import appRoutes from '@/routes';
import { fetchCensuses } from '@/store/censusesSlice';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCensuses(censusesMock));
  }, [dispatch]);

  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Router>
        <Navbar />
        <Paper elevation={3} sx={{ p: 2, flex: 1 }}>
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Paper>
        <Footer />
      </Router>
    </Box>
  );
};

export default App;
