import React, { useContext } from 'react'
import { Box } from '@mui/material';

import { AppContext } from "../../AppContext";

export default function Background(props) {
  const { children } = props
  const { colorTheme, narrowScreen } = useContext(AppContext)
  
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
      // overflow="scroll"
    >
      { children }
    </Box>
  )
}
