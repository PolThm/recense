import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React, { FC } from 'react';

type Props = {
  name: string;
  date: string;
};

const ArchivePreview: FC<Props> = ({ name, date }) => {
  return (
    <Card sx={{ backgroundColor: 'primary.main' }} variant="elevation">
      <CardContent sx={{ color: 'text.secondary' }}>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {date}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary" sx={{ textTransform: 'none' }}>
          Ouvrir
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArchivePreview;
