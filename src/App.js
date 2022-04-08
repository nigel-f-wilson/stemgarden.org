import React from 'react'
import MainRouter from './MainRouter'

import { useScreenWidth } from "./hooks"


// CSS & THEMING
import theme from "./theme"
import { ThemeProvider } from '@mui/material/styles';

// MUI  components
import { Box, CssBaseline } from '@mui/material';
import Navbar from './components/navigation/Navbar';



export default function App() {
  const screenWidth = useScreenWidth()
  const smallScreen = screenWidth < 600

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
        <Box id='root' sx={defaultBackground} >
          <Navbar smallScreen={smallScreen} />
          <MainRouter />
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}