import React from 'react';
import { useScreenWidth } from "../../hooks";

import { MobileNavbar, DesktopNavbar } from "./_index";

import { Container, Box } from "@mui/material"

export default function Navbar(props) {
    const screenWidth = useScreenWidth()
    return (
      <Box 
        sx={{ 
          width: '100vw',
          backgroundColor: 'primary.main'
        }}
      >
        {/* <Container maxWidth='md' id="navbar-container" > */}
          {/* <MobileNavbar /> */}
          {(screenWidth >= 600) ? <DesktopNavbar /> : <MobileNavbar />  }  
        {/* </Container> */}
      </Box>
    )
}

