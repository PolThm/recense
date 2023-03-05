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
    if (!userInfo && userInfo !== 0)
      return { categoryName, userInfo: 'Non renseigné' };
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
    createData('Logement', census.lodgingType),
    createData('Lieu', census.location),
    createData('Résident(s)', census.residents),
  ];

  return (
    <TableContainer data-testid="census-summary">
      <Table size="small">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.categoryName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ width: '30%', pr: 0 }}
              >
                {row.categoryName}
              </TableCell>
              <TableCell
                align="right"
                sx={{ pl: 0 }}
                data-testid={row.categoryName}
              >
                {row.userInfo}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CensusSummary;
