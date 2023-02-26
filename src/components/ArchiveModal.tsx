import { Box, Modal, Typography } from '@mui/material';
import { FC } from 'react';

import { Census } from '@/types/interfaces';

type Props = {
  census: Census;
  isOpen: boolean;
  handleClose: () => void;
};

const ArchiveModal: FC<Props> = ({ census, isOpen, handleClose }) => {
  const { date, contact, profile, lodging } = census;

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute' as const,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography>{date}</Typography>
        <Typography variant="h6" component="p" sx={{ mt: 1 }}>
          {`${contact.firstName} ${contact.lastName}`}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ArchiveModal;
