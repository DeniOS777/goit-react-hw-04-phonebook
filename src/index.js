import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import App from 'components/App';
import { GlobalStyle } from './components/GlobalStyle';
import { theme } from './constants';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </ThemeProvider>
  </React.StrictMode>
);
