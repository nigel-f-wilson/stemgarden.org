import React, { useContext } from 'react';
import { useScreenWidth } from "../../hooks";
import { PageLayoutContext } from "../../contexts";

import { MobileNavbar, DesktopNavbar } from "./_index";
import { Box } from "@mui/material"

export default function Navbar(props) {
  const { navbarStyle, navbarHeightPx } = useContext(PageLayoutContext)

  console.log(`NAV STYLE: ${navbarStyle}`);
  
    
  return (
    <React.Fragment>
      <Box 
        children={(navbarStyle === 'mobile') ?  <MobileNavbar /> : <DesktopNavbar /> } 
        // width='100vw'
        bgcolor='primary.main'
      />
      <Box 
        height={navbarHeightPx - 8}
        bgcolor='primary.main'
      />
    </React.Fragment>
  )
}

