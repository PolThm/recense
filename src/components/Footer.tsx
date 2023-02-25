import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Link, Typography } from '@mui/material';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'primary.main',
        py: 2,
      }}
    >
      <Typography
        variant="h6"
        color="primary.contrastText"
        sx={{
          fontWeight: 400,
          display: 'flex',
          alignItems: 'center',
          gap: 0.8,
        }}
      >
        Développé par
        <Link
          underline="none"
          href="https://github.com/PolThm/recense"
          target="_blank"
          rel="noopener noreferrer"
          color="secondary"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          Pol Thomas
          <GitHubIcon sx={{ fontSize: '1.5rem' }} />
        </Link>
      </Typography>
      <Typography color="textSecondary" variant="subtitle1" sx={{ mt: 1 }}>
        {`${new Date().getFullYear()} | Vite | React | TS | Redux | MUI | Formik`}
      </Typography>
    </Box>
  );
};

export default Footer;
