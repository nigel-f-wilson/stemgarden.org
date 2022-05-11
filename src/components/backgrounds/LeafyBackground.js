import React, { useContext } from 'react'
import { Box, Container } from '@mui/material';

import { AppContext } from "../../AppContext";

// MY images
const leafy_background = "https://res.cloudinary.com/nola-stem-garden/image/upload/v1647192146/stemgarden.org/leafy_background_wzclfb.jpg"

export default function LeafyBackground(props) {
  const { narrowScreen } = useContext(AppContext)

  const gradient = (narrowScreen) ?
    "linear-gradient(90deg, rgba(58,94,22,0.80) 0%, rgba(58,99,22,0.80) 100%)"
    : "linear-gradient(90deg, rgba(58,94,22,0.30) 0%, rgba(58,94,22,0.80) 10%, rgba(58,94,22,0.80) 90%, rgba(58,99,22,0.30) 100%)"

  const backgroundStyles = {
    width: '100%',
    minHeight: '100vh',
    height: 'auto',
    backgroundImage: `
      ${gradient},
      url(${leafy_background})
    `,
    backgroundPosition: 'center top',
    backgroundRepeat: 'repeat-y',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  }  
  return (
    <Box sx={backgroundStyles} >
      <Container maxWidth='md' id='landing' >
        { props.children }
      </Container>
    </Box>
  )
}