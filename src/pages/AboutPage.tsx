import { Box, Paper, Typography } from '@mui/material';
import { FC } from 'react';

const AboutPage: FC = () => {
  return (
    <Box
      height="60vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Paper
        elevation={3}
        sx={{ padding: '1rem', backgroundColor: 'secondary.light' }}
      >
        <Typography color="primary.dark" variant="h1">
          About
        </Typography>
        <h1>This is the About Page</h1>
        <div className="card" />
      </Paper>
    </Box>
  );
};

export default AboutPage;
