import { Box, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';

import useFetch from '@/hooks/useFetch';

const LOADING_TEXT = 'Chargement...';
const ERROR_TEXT = 'Il semblerait que le serveur ne soit pas joignable :/';

const RandomJoke: FC = () => {
  const [isFakeLoading, setIsFakeLoading] = useState(true);

  const { isApiLoading, apiData, apiError } = useFetch(
    'https://icanhazdadjoke.com/'
  );

  const isLoaded = !isFakeLoading && !isApiLoading;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsFakeLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Box>
      <Typography textAlign="center" gutterBottom>
        Pour vous consoler, voici une petite blague aléatoire en anglais :
      </Typography>

      <Box sx={{ minHeight: 25, mt: 1 }}>
        {!isLoaded ? (
          <Typography color="primary">{LOADING_TEXT}</Typography>
        ) : (
          <Typography
            textAlign="center"
            color={apiError ? 'error' : 'primary'}
            sx={{ fontWeight: 600 }}
            style={{ animation: 'fadein 1s ease' }}
          >
            {apiError ? ERROR_TEXT : apiData?.joke}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default RandomJoke;
