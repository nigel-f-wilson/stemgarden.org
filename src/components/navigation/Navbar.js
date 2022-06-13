import React, { useContext } from 'react';
import { AppContext } from "../../AppContext";

import { MobileNavbar, DesktopNavbar } from "./index";
import { Box } from "@mui/material"

export default function Navbar(props) {
  const { navbarStyle, navbarHeightPx } = useContext(AppContext)

  return (
    <React.Fragment>
      <Box 
        display={(navbarStyle === 'hidden') ?  "none" : "flex"}
        children={ (navbarStyle === 'mobile') ? <MobileNavbar /> : <DesktopNavbar /> } 
        bgcolor='primary.main'
      />
      <Box 
        height={navbarHeightPx - 1}
        bgcolor='primary.main'
      />
    </React.Fragment>
  )
}

