import React from 'react'
import MainRouter from './MainRouter'

import { useScreenWidth } from "./hooks"


// CSS & THEMING
import theme from "./theme"
import { ThemeProvider } from '@mui/material/styles';

// MUI  components
import { Box, CssBaseline } from '@mui/material';
import Navbar from './components/navigation/Navbar';
import { PageLayoutContextProvider } from './contexts';



export default function App() {
  

  const defaultBackground = {
    bgcolor: 'primary.main',
    height: '100vh',
    width: '100vw',
    overflowX: 'hidden',
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <PageLayoutContextProvider >
          <Box id='root' sx={defaultBackground} >
            <Navbar />
            <MainRouter />
          </Box>
        </PageLayoutContextProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}