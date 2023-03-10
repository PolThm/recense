import { Box, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';

import { useFetchCustomQuery } from '@/store/apiSlice';
import { addDelay } from '@/utils/time-utils';

const LOADING_TEXT = 'Chargement...';
const ERROR_TEXT = 'Il semblerait que le serveur ne soit pas joignable :/';
const API_URL = 'https://icanhazdadjoke.com/';

const RandomJoke: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {
    isLoading: isApiLoading,
    data: apiData,
    error: apiError,
  } = useFetchCustomQuery(API_URL);
  const joke = apiData?.joke;
  const jokeError = apiError || !joke;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (!isApiLoading) {
      timeoutId = addDelay(() => setIsLoading(isApiLoading)); // add 500ms delay to avoid flickering
    }
    return () => clearTimeout(timeoutId);
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
