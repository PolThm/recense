import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import { FC } from 'react';

import CensusSummary from '@/components/CensusSummary';
import { Census } from '@/types/interfaces';

type Props = {
  census: Census;
  isOpen: boolean;
  handleClose: () => void;
};

const ArchiveModal: FC<Props> = ({ census, isOpen, handleClose }) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90vw', sm: 500 },
          backgroundColor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Typography>{census.date}</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <CensusSummary census={census} />
      </Box>
    </Modal>
  );
};

export default ArchiveModal;
