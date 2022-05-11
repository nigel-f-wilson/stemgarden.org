import React, { useContext } from 'react'
import { Typography, Box, Container } from '@mui/material';

import { AppContext } from "../../AppContext";

export default function PageTitle(props) {
  const { colorTheme, title } = props

  const textColor = (colorTheme === "dark") ? "white" : "black"
  const bgColor = (colorTheme === "dark") ? "darkGrey" : "white"
  
  return (
    <Box pb='2rem' display='flex' flexDirection='column' >
      <Typography align="center" variant="pageTitle" >
        { title }
      </Typography>
    </Box>
  )
}

// PropTypes  paragraphs should be and array of strings
