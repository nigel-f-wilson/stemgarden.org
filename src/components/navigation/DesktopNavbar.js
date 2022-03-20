import React from 'react';

// MY COMPONENTS
import DesktopMenus from "./DesktopMenus";
import Logo from "./Logo";

import { 
    Box, 
    Typography,
    AppBar,
} from "@mui/material"

import theme from '../../theme';

export default function DesktopNavbar(props) {
  const { height } = props

  return (
    <AppBar
      position="fixed"
      elevation={3}
      sx={{ 
        height: height,
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
        <Logo navbarHeight={height} />
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
              align="left"
              // fontFamily='Permanent Marker'
              fontFamily='Special Elite'
              lineHeight='1.2'
            >
                STEM<br />Garden
            </Typography>
        </Box>
    )
}

