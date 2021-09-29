import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

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

export default theme;