import { Alert, Snackbar } from '@mui/material';
import { FC, useEffect, useState } from 'react';

const DemoNotif: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={10000}
      onClose={handleClose}
      sx={{ width: 'fit-content', bottom: 100, marginLeft: 'auto' }}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert onClose={handleClose} severity="info">
        Ceci est une démo
      </Alert>
    </Snackbar>
  );
};

export default DemoNotif;
