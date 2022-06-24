import React, { useContext } from 'react'
import { Box, Container } from '@mui/material';

import { AppContext } from "../../AppContext";
import { leafy_background } from "../../cloudinaryURLs";

export default function ScreenHeightSection(props) {
  const { children, bg } = props
  const { narrowScreen, availableHeight } = useContext(AppContext)

  const gradient = (narrowScreen) ?
    "linear-gradient(90deg, rgba(58,94,22,0.80) 0%, rgba(58,99,22,0.80) 100%)"
    : "linear-gradient(90deg, rgba(58,94,22,0.30) 0%, rgba(58,94,22,0.80) 10%, rgba(58,94,22,0.80) 90%, rgba(58,99,22,0.30) 100%)"

  const leafyBackgroundStyles = {
    width: '100vw',
    height: availableHeight,
    backgroundImage: `
      ${gradient},
      url(${leafy_background})
    `,
    backgroundPosition: 'center top',
    backgroundRepeat: 'repeat-y',
    backgroundSize: 'cover',
  }  

  const darkBackgroundStyles = {
    width: '100vw',
    height: availableHeight,
    backgroundColor: 'darkGrey',
  }  

  const whiteBackgroundStyles = {
    width: '100vw',
    height: availableHeight,
    backgroundColor: 'white',
  }  

  let backgroundStyles = 
    (bg === 'leafy') ? leafyBackgroundStyles :
    (bg === 'dark') ? darkBackgroundStyles : whiteBackgroundStyles


  return (
    <Box  sx={backgroundStyles} >
      <Container
        children={children}
        maxWidth='md' 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'space-evenly',
          textAlign: 'center',
        }}    
      />
    </Box>
      
  )
}