import React from 'react';
import Layout from '../layout';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#109226',
    },
    secondary: {
      main: '#282c34'
    }
  },
  typography: {
    fontFamily: 'Roboto,Futura,-apple-system,sans-serif',    
     h1: {
       fontSize: '2.375rem',
       fontWeight: 700
     },
     body2: {
       fontSize: '1.1875rem'
     }
  }
});

const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Layout />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
