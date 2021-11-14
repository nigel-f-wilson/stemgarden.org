import React from 'react'
import {
    Route,
    Routes
} from "react-router-dom"

// CSS & THEMING
import './App.css';
import theme from "./theme"
import { ThemeProvider } from '@mui/material/styles';

// PAGES
// import Landing from "./pages/Landing"
// import Play from "./pages/Play"
// import Info from "./pages/Info"

// MUI  components
import { Box, CssBaseline } from '@mui/material';


export default function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Box id='root'
                    sx={{
                        // border: 'solid red 5px',
                        bgcolor: 'primary.main',
                        height: '100vh',
                        width: '100vw',
                        // overflow: 'scroll',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                        <Routes>
                            <Route exact path="/">
                                {/* <Landing /> */}
                            </Route>
                            <Route path="/play" >
                                {/* <Play /> */}
                            </Route>
                            <Route path="/info" >
                                {/* <Info /> */}
                            </Route>

                        </Routes>
                </Box>
            </ThemeProvider>
        </React.Fragment>
    );
}