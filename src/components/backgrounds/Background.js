import React, { useContext } from 'react'
import { Box } from '@mui/material';

import { AppContext } from "../../AppContext";

export default function Background(props) {
  const { children } = props
  const { colorTheme } = useContext(AppContext)
  
  const bgcolor = (colorTheme === "dark") ? "darkGrey" : "white"
  
  return (
    <Box 
      id='Background'
      width='100%'
      minHeight='100vh'
      bgcolor={bgcolor}
      display='flex'
      flexDirection='column'
      overflowX='hidden'
    >
      { children }
    </Box>
  )
}
