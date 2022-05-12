import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material';

import { AppContext } from ".././../AppContext";

export default function Section(props) {
  const { headerText, paragraphs } = props

  const { colorTheme } = useContext(AppContext)
  const textColor = (colorTheme === "dark") ? "white" : "black"
  
  return (
    <Box pb='1rem' display='flex' flexDirection='column' >
      <Typography  
        children={headerText}
        color={textColor}
        variant="pageSubheader" 
        gutterBottom
      />
      {
        paragraphs.map((paragraph, index) => {
          return (
            <Typography 
              key={`${headerText}-paragraph-${index}`}
              color={textColor} 
              children={paragraph}
              variant="body1" 
              align='justify' 
              gutterBottom
            />
          )
        })
      }
    </Box>
  )
}
