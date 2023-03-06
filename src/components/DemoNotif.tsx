import { Alert, Snackbar, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';

const DemoNotif: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsOpen(true), 1000);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsMobile(window.innerWidth < 600);
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={10000}
      onClose={handleClose}
      sx={{ mt: { xs: 7, md: 8 } }}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert
        onClose={handleClose}
        severity="info"
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <Typography fontWeight="lg" mt={0.25}>
          Bienvenue dans cette démo !
        </Typography>
        <Typography fontSize="sm" sx={{ opacity: 0.8 }}>
          {isMobile
            ? 'Vos modifications seront locales.'
            : 'Vos modifications seront sauvegardées localement.'}
        </Typography>
      </Alert>
    </Snackbar>
  );
};

export default DemoNotif;
