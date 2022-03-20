import React from 'react'

import { 
  // Container, 
  Box, 
  Typography } from '@mui/material';
import theme from '../../theme';


export default function FifteenGame(props) {
  
  return (
    <Box 
      width='100vw' 
      height='100vh'
      bgColor={theme.palette.common.black}
      zIndex={9000}
    >
      <Typography variant='h1' mt={25}> 15 Game Page</Typography>

    </Box>
  )
}

