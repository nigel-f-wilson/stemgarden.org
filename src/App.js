import React from 'react'
import { Box, CssBaseline } from '@mui/material';

// My Components
import MainRouter from './MainRouter'
import Navbar from './components/navigation/Navbar';

// THEME & Layout Context
import theme from "./theme"
import { ThemeProvider } from '@mui/material/styles';
import { AppContextProvider } from './AppContext';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppContextProvider >
          <Box id='root' 
            bgcolor='primary.main'
            height='100vh'
            width='100vw'
            overflowX='hidden'
          >
            <Navbar />
            <MainRouter />
          </Box>
        </AppContextProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}