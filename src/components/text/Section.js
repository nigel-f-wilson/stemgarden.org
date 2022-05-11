import React, { useContext } from 'react'
import { Box, Container } from '@mui/material';

import { AppContext } from ".././../AppContext";

export default function Section(props) {
  const { colorTheme, headerText, pragraphs } = props

  const { narrowScreen } = useContext(AppContext)
  const padding = narrowScreen ? '0rem' : '2rem 1rem 3rem'
  const bgcolor = (colorTheme === "dark") ? "darkGrey" : "white"
  return (
    <Box 
      width='100%'
      minHeight='100vh'
      bgcolor={bgcolor}
      display='flex'
      flexDirection='column'
      padding={padding}
    >
      <Container maxWidth='sm'>
        { props.children }
      </Container>
    </Box>
  )
}

// PropTypes  paragraphs should be and array of strings
