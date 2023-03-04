import { Box, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';

import useFetch from '@/hooks/useFetch';

const LOADING_TEXT = 'Chargement...';
const ERROR_TEXT = 'Il semblerait que le serveur ne soit pas joignable :/';
const API_URL = 'https://icanhazdadjoke.com/';

const RandomJoke: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isApiLoading, apiData, apiError } = useFetch(API_URL);
  const joke = apiData?.joke;
  const jokeError = apiError || !joke;

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!isApiLoading) {
      timeout = setTimeout(() => setIsLoading(isApiLoading), 500);
    }
    return () => clearTimeout(timeout);
  }, [isApiLoading]);

  return (
    <Box>
      <Typography textAlign="center" gutterBottom>
        Pour vous consoler, voici une petite blague aléatoire en anglais :
      </Typography>

      <Box sx={{ minHeight: 25, mt: 1, textAlign: 'center' }}>
        {isLoading ? (
          <Typography color="primary">{LOADING_TEXT}</Typography>
        ) : (
          <Typography
            color={jokeError ? 'error' : 'primary'}
            sx={{ fontWeight: 600 }}
            style={{ animation: 'fadein 1s ease' }}
            data-testid={jokeError ? 'random-joke-error' : 'random-joke-joke'}
          >
            {jokeError ? ERROR_TEXT : joke}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default RandomJoke;
