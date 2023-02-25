import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3467ae',
      light: '#407CC4',
      dark: '#0F417A',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#ffc400',
      light: '#FFD302',
      dark: '#b28900',
      contrastText: '#3467ae',
    },
    error: {
      main: '#b00020',
    },
    background: {
      default: '#F7F7F7',
      paper: '#F7F7F7',
    },
    text: {
      primary: '#525457',
      secondary: 'rgba(255, 255, 255, 0.8)',
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif',
  },
});

theme.typography.h1 = {
  ...theme.typography.h1,
  fontSize: '6rem',
  [theme.breakpoints.down('md')]: { fontSize: '4.5rem' },
  [theme.breakpoints.down('sm')]: { fontSize: '3rem' },
};

theme.typography.h2 = {
  ...theme.typography.h2,
  fontSize: '2.5rem',
  [theme.breakpoints.down('md')]: { fontSize: '2.1rem' },
  [theme.breakpoints.down('sm')]: { fontSize: '1.3rem' },
};

theme.typography.h3 = {
  ...theme.typography.h3,
  fontSize: '3rem',
  [theme.breakpoints.down('md')]: { fontSize: '2.4rem' },
  [theme.breakpoints.down('sm')]: { fontSize: '1.5rem' },
};

theme.typography.h4 = {
  ...theme.typography.h4,
  fontSize: '2.125rem',
  [theme.breakpoints.down('md')]: { fontSize: '1.8rem' },
  [theme.breakpoints.down('sm')]: { fontSize: '1.2rem' },
};

theme.typography.h5 = {
  ...theme.typography.h5,
  fontSize: '1.5rem',
  [theme.breakpoints.down('md')]: { fontSize: '1.4rem' },
  [theme.breakpoints.down('sm')]: { fontSize: '1.1rem' },
};

theme.typography.h6 = {
  ...theme.typography.h6,
  fontSize: '1.25rem',
  [theme.breakpoints.down('md')]: { fontSize: '1.2rem' },
  [theme.breakpoints.down('sm')]: { fontSize: '1rem' },
};

theme.typography.button = {
  ...theme.typography.button,
  fontSize: '1.3rem',
  [theme.breakpoints.down('md')]: { fontSize: '1.2rem' },
  [theme.breakpoints.down('sm')]: { fontSize: '1rem' },
};

export default theme;
