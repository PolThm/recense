import { Box, Typography } from '@mui/material';
import { FC } from 'react';

import useFetch from '@/hooks/useFetch';

const RandomJoke: FC = () => {
  const { loading, data, error } = useFetch('https://icanhazdadjoke.com/');

  return (
    <Box>
      <Typography textAlign="center" gutterBottom>
        Pour vous consoler, voici une petite blague aléatoire en anglais :
      </Typography>

      {loading && <Typography>Chargement...</Typography>}
      {error && (
        <Typography textAlign="center" color="error">
          Erreur : {error}
        </Typography>
      )}
      {data && (
        <Typography
          textAlign="center"
          color="primary"
          sx={{ fontWeight: 600, mt: 1 }}
        >
          {data.joke}
        </Typography>
      )}
    </Box>
  );
};

export default RandomJoke;
