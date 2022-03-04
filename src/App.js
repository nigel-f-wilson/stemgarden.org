import React from 'react'
import Router from './Router'

// CSS & THEMING
import theme from "./theme"
import { ThemeProvider } from '@mui/material/styles';

// MUI  components
import { Box, CssBaseline } from '@mui/material';


export default function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Box id='root'
                    sx={{
                        bgcolor: 'primary.main',
                        height: '100vh',
                        width: '100vw',
                        overflow: 'hidden',
                    }}
                >
                    <Router />
                </Box>
            </ThemeProvider>
        </React.Fragment>
    );
}