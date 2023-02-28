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
  const createData = (
    categoryName: string,
    userInfo: string | number | null | undefined
  ) => {
    if (!userInfo) return { categoryName, userInfo: 'Non renseigné' };
    return { categoryName, userInfo };
  };

  const rows = [
    createData('Prénom', census.firstName),
    createData('Nom', census.lastName),
    createData('Courriel', census.email),
    createData('Téléphone', census.phone),
    createData('Âge', census.age),
    createData('Genre', census.gender),
    createData('Situation', census.situation),
    createData('Éducation', census.education),
    createData('Revenu', census.income),
    createData('Type de logement', census.lodgingType),
    createData('Emplacement', census.location),
    createData('Nombre de résident(s)', census.residents),
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
