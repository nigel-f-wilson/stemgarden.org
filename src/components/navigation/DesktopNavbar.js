import React, { useContext } from 'react';

// MY COMPONENTS
import DesktopMenus from "./DesktopMenus";
import Logo from "./Logo";

import { 
    Box, 
    Typography,
    AppBar,
} from "@mui/material"

import theme from '../../theme';
import { AppContext } from '../../AppContext';

export default function DesktopNavbar() {
  const { navbarHeight } = useContext(AppContext)

  return (
    <AppBar
      position="fixed"
      elevation={3}
      sx={{ 
        height: navbarHeight,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }}
    >
      <Box 
        width={theme.breakpoints.values.md}
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
      >
        <Logo />
        <DesktopBrand />
        <DesktopMenus />
      </Box>
    </AppBar>
  );
}

function DesktopBrand() {
  return (
    <Box  pt={2} >
      <Typography 
        variant='navbarBrand'
        fontFamily='Special Elite'
        lineHeight='1.2'
      >
        STEM<br />Garden
      </Typography>
    </Box>
  )
}

