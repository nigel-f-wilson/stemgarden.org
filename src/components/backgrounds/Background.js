import React, { useContext } from 'react'
import { Box } from '@mui/material';

import { AppContext } from "../../AppContext";

export default function Background(props) {
  const { colorTheme, narrowScreen } = useContext(AppContext)
  
  console.log(`Background had colortTheme: ${colorTheme}`);
  console.log(`Background had narrowScreen: ${narrowScreen}`);
  
  
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
      { props.children }
    </Box>
  )
}
