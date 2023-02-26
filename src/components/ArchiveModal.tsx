import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  IconButton,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import { FC } from 'react';

import { Census } from '@/types/interfaces';

type Props = {
  census: Census;
  isOpen: boolean;
  handleClose: () => void;
};

const ArchiveModal: FC<Props> = ({ census, isOpen, handleClose }) => {
  const { date, contact, profile, lodging } = census;

  const createData = (
    categoryName: string,
    userInfo: string | number | null | undefined
  ) => {
    return { categoryName, userInfo };
  };

  const rows = [
    createData('Prénom', contact.firstName),
    createData('Nom', contact.lastName),
    createData('Courriel', contact.mail),
    createData('Téléphone', contact.phone),
    createData('Âge', profile.age),
    createData('Genre', profile.gender),
    createData('Situation', profile.situation),
    createData('Éducation', profile.education),
    createData('Revenu', profile.income),
    createData('Type de logement', lodging.type),
    createData('Emplacement', lodging.location),
    createData('Nombre de résident(s)', lodging.residents),
  ];

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
          }}
        >
          <Typography>{date}</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <TableContainer sx={{ mt: 2 }}>
          <Table size="small" aria-label="contact table">
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.categoryName}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.categoryName}
                  </TableCell>
                  <TableCell align="right">{row.userInfo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  );
};

export default ArchiveModal;
