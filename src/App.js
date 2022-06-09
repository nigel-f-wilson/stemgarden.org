import React from 'react'
import { Box, CssBaseline } from '@mui/material';
import { FormspreeProvider } from '@formspree/react';


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
          <FormspreeProvider project="1960964562039602920" >
          {/* <FormspreeProvider project={process.env.REACT_APP_FORMSPREE_PROJECT_ID} > */}
            <Box 
              id='App' 
              bgcolor='primary.main'
              height='100vh'
              width='100vw'
              overflowX='hidden'
              overflowY='scroll'
            >
              <Navbar /> 
              <MainRouter />
            </Box>
          </FormspreeProvider>
        </AppContextProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}