import React from 'react';
import { useScreenWidth } from "../../hooks";

import { MobileNavbar, DesktopNavbar } from "./_index";
import { Box } from "@mui/material"

export default function Navbar(props) {
    const screenWidth = useScreenWidth()
    
    const mobileNavbarHeight = 48
    const desktopNavbarHeight = 96

    
    return (
      <React.Fragment>
        <Box 
          children={(screenWidth >= 600) ? 
            <DesktopNavbar height={desktopNavbarHeight} /> : 
            <MobileNavbar height={mobileNavbarHeight} /> } 
          width='100vw'
          backgroundColor='primary.main'
        />
        <Box 
          height={(screenWidth >= 600) ? desktopNavbarHeight : mobileNavbarHeight  }
          width='100vw'
          backgroundColor='primary.main'
        />
      </React.Fragment>
    )
}

