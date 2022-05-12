import React, { useContext } from 'react';
import { AppContext } from "../../AppContext";

import { MobileNavbar, DesktopNavbar } from "./_index";
import { Box } from "@mui/material"

export default function Navbar(props) {
  const { navbarStyle, navbarHeightPx } = useContext(AppContext)

  return (
    <React.Fragment>
      <Box 
        children={(navbarStyle === 'mobile') ?  <MobileNavbar /> : <DesktopNavbar /> } 
        // width='100vw'
        bgcolor='primary.main'
      />
      <Box 
        height={navbarHeightPx - 1}
        bgcolor='primary.main'
      />
    </React.Fragment>
  )
}

