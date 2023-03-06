import '@/assets/style/main.scss';

import { CssBaseline, ThemeProvider } from '@mui/material';
import * as dotenv from 'dotenv';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from '@/App';
import theme from '@/assets/style/theme';
import { setupStore } from '@/store';

dotenv.config();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
