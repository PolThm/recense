import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import React, { FC } from 'react';

type Props = {
  name: string;
  date: string;
  deleteArchive: () => void;
  openArchive: () => void;
};

const ArchivePreview: FC<Props> = ({
  name,
  date,
  deleteArchive,
  openArchive,
}) => {
  return (
    <Card sx={{ backgroundColor: 'primary.main' }} variant="elevation">
      <CardContent sx={{ color: 'text.secondary', position: 'relative' }}>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {date}
        </Typography>
        <Typography variant="h5" component="p">
          {name}
        </Typography>
        <IconButton
          aria-label="delete"
          color="error"
          sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
          onClick={deleteArchive}
        >
          <DeleteForeverIcon />
        </IconButton>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          size="small"
          color="secondary"
          sx={{ textTransform: 'none' }}
          onClick={openArchive}
        >
          Ouvrir
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArchivePreview;
