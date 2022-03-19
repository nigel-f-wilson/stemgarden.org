import React from 'react';

// MY COMPONENTS
import MobileMenu from "./MobileMenu";
import FlexRow from "../../components/FlexRow";
import Logo from "./Logo";

import {  
    Typography,
    AppBar,
} from "@mui/material"

export default function MobileNavbar(props) {
  const navbarHeight = "3.0rem"
  return (
    <AppBar
      elevation={4}
      sx={{
        height: navbarHeight,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "primary.main", 
        color: "white",
      }}
    >
      <FlexRow justify='space-between' maxWidth='lg' >
        <FlexRow justify='start'  >
        <Logo navbarHeight={navbarHeight} />
        <Typography sx={{ paddingLeft: '1rem' }} variant='h3'   >
            STEM Garden
        </Typography>
        </FlexRow>
        <MobileMenu />
      </FlexRow>
    </AppBar>
  );
}

