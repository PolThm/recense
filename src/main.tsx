import '@/assets/style/main.scss';

import { CssBaseline, ThemeProvider } from '@mui/material';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from '@/App';
import theme from '@/assets/style/theme';
import { store } from '@/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
