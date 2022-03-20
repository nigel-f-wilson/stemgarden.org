import React from 'react';

// MY COMPONENTS
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

import {  
  Box,
  Typography,
  AppBar,
} from "@mui/material"
import { fontFamily } from "@mui/system";

export default function MobileNavbar(props) {
  const { height } = props
  return (
    <AppBar
      elevation={4}
      sx={{
        height: height,
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
        <Logo navbarHeight={height} />
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

