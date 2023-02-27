import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import { FC } from 'react';

import { Census } from '@/types/interfaces';

type Props = {
  census: Census;
};

const CensusSummary: FC<Props> = ({ census }) => {
  const { contact, profile, lodging } = census;

  const createData = (
    categoryName: string,
    userInfo: string | number | null | undefined
  ) => {
    if (!userInfo) return { categoryName, userInfo: 'Non renseigné' };
    return { categoryName, userInfo };
  };

  const rows = [
    createData('Prénom', contact.firstName),
    createData('Nom', contact.lastName),
    createData('Courriel', contact.email),
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
    <TableContainer>
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
  );
};

export default CensusSummary;
