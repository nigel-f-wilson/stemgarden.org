import React from 'react';
import { Link as RouterLink } from "react-router-dom";

// MY COMPONENTS
import DesktopMenus from "./DesktopMenus";
import Logo from "./Logo";

import { 
    Box, 
    Typography,
    AppBar,
} from "@mui/material"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../../theme';

const chess_logo = "https://res.cloudinary.com/nola-stem-garden/image/upload/c_scale,h_150,w_150/v1647198083/stemgarden.org/nsgLogoSnipped_li5iap.png"
// const leaf_logo = "https://www.logoai.com/oss/icons/2022/03/14/fe7fdb2f7fd12c15c1bfd8441e7c346e.svg"

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

