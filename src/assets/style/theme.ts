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
      contrastText: '#525457',
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

export default theme;
