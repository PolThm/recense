import { Card, CardContent, Typography } from '@mui/material';
import React, { FC } from 'react';

type Props = {
  title: string;
  score: number;
  scoreVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const StatCard: FC<Props> = ({ title, score, scoreVariant }) => {
  const formattedScore = score.toLocaleString('fr-CA', {
    maximumFractionDigits: 2,
  });

  return (
    <Card
      sx={{
        backgroundColor: 'primary.contrastText',
        width: 200,
        height: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        mx: 'auto',
        pt: 2,
        boxShadow: 2,
      }}
      variant="elevation"
    >
      <CardContent
        sx={{
          color: 'text.primary',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          height: 1,
        }}
      >
        <Typography variant="h5" component="p" textAlign="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant={scoreVariant}
          component="p"
          textAlign="center"
          color="primary"
          sx={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {formattedScore}
        </Typography>
      </CardContent>
    </Card>
  );
};

StatCard.defaultProps = {
  scoreVariant: 'h1',
};

export default StatCard;
