import React, { useContext } from 'react'
import { Box, Container } from '@mui/material';

import { AppContext } from "../../AppContext";
import { leafy_background } from "../../cloudinaryURLs";

export default function ScreenHeightSection(props) {
  const { narrowScreen } = useContext(AppContext)
  const { 
    id, 
    children, 
    bg, 
    sectionHeight = '100vh' 
  } = props

  const gradient = (narrowScreen) ?
    "linear-gradient(90deg, rgba(58,94,22,0.80) 0%, rgba(58,99,22,0.80) 100%)"
    : "linear-gradient(90deg, rgba(58,94,22,0.30) 0%, rgba(58,94,22,0.80) 10%, rgba(58,94,22,0.80) 90%, rgba(58,99,22,0.30) 100%)"

  const leafyBackgroundStyles = {
    width: '100vw',
    height: sectionHeight,
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
    height: sectionHeight,
    backgroundColor: 'darkGrey',
  }  

  const whiteBackgroundStyles = {
    width: '100vw',
    height: sectionHeight,
    backgroundColor: 'white',
  }  

  let backgroundStyles = 
    (bg === 'leafy') ? leafyBackgroundStyles :
    (bg === 'dark') ? darkBackgroundStyles : whiteBackgroundStyles


  return (
    <Box id={id}
      sx={backgroundStyles} 
      width='100vw'
      height={sectionHeight}
    >
      <Container
        children={children}
        maxWidth='md' 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
        }}    
      />
    </Box>
      
  )
}