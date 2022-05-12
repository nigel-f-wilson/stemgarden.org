import React, { useContext } from 'react';

// MY COMPONENTS
import MobileMenu from "./MobileMenuDrawer";
import Logo from "./Logo";

import {  
  Box,
  Typography,
  AppBar,
} from "@mui/material"
import { AppContext } from '../../AppContext';

export default function MobileNavbar() {
  const { navbarHeightPx } = useContext(AppContext)
  return (
    <AppBar
      elevation={4}
      sx={{
        height: navbarHeightPx,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "primary.main", 
        color: "white",
      }}
    >
      <Box display='flex' 
        justifyContent='space-between' 
        alignItems='center' 
        width="100%" 
      >
        <Logo />
        <Typography 
          variant='navbarBrand'
          children="STEM Garden"
          align="center"
          // fontFamily='Permanent Marker'
          fontFamily='Special Elite'
          pt={2}
        />
        <MobileMenu />
      </Box>
    </AppBar>
  );
}

