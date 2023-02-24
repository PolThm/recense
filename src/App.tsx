import { Box, Paper } from '@mui/material';
import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import NotFoundPage from '@/pages/NotFoundPage';
import appRoutes from '@/routes';

const App: FC = () => {
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Router>
        <Navbar />
        <Paper
          elevation={3}
          sx={{ padding: '1rem', backgroundColor: 'secondary.light' }}
        >
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
