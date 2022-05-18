import React, { useContext } from 'react'
import { Box } from '@mui/material';

import { AppContext } from "../../AppContext";

export default function Background(props) {
  const { colorTheme, narrowScreen } = useContext(AppContext)
  
  const bgcolor = (colorTheme === "dark") ? "darkGrey" : "white"
  
  return (
    <Box 
      width='100%'
      minHeight='100vh'
      bgcolor={bgcolor}
      display='flex'
      flexDirection='column'
    >
      { props.children }
    </Box>
  )
}
