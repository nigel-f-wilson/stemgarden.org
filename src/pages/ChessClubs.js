import React from 'react'

import { useScreenWidth } from "../hooks"

// MY components

// MY images
import leafy_background from "../images/leafy_background.jpg";

// MUI Imports
import { Container, Box, Typography } from '@mui/material';
import { common } from '@mui/material/colors';


// LandingPage is responsible for rendering a Navbar and either the Mobile or Desktop version
// depending on screen width. The Navbar contains its own M.vs.D. rendering logic. 
export default function ChessClubs(props) {
  const screenWidth = useScreenWidth()
  return (
    <React.Fragment >
    </React.Fragment>
  )
}

