import React from 'react';
import { useScreenWidth } from "../../hooks";

import { MobileNavbar, DesktopNavbar } from "./_index";
import { Box } from "@mui/material"
import theme from '../../theme';

export default function Navbar(props) {
    const screenWidth = useScreenWidth()
    
    const mobileNavbarHeight = 48
    const desktopNavbarHeight = 96

    
    return (
      <React.Fragment>
        <Box 
          children={(screenWidth >= theme.breakpoints.values.md) ? 
            <DesktopNavbar height={desktopNavbarHeight} /> : 
            <MobileNavbar height={mobileNavbarHeight} /> } 
          width='100vw'
          backgroundColor='primary.main'
        />
        <Box 
          height={(screenWidth >= theme.breakpoints.values.md) ? desktopNavbarHeight : mobileNavbarHeight  }
          width='100vw'
          backgroundColor='red'
        />
      </React.Fragment>
    )
}

