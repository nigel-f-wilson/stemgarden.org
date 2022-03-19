import React from 'react';
import { useScreenWidth } from "../../hooks";

import { MobileNavbar, DesktopNavbar } from "./_index";
import { Box } from "@mui/material"

export default function Navbar(props) {
    const screenWidth = useScreenWidth()
    return (
      <Box 
        children={(screenWidth >= 600) ? <DesktopNavbar /> : <MobileNavbar />  } 
        sx={{ 
          width: '100vw',
          backgroundColor: 'primary.main'
        }}
      />
    )
}

