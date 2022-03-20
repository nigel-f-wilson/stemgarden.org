import React from 'react'

import { 
  Container, 
  Box, 
  Typography } from '@mui/material';
import { common } from '@mui/material/colors';
import theme from '../../theme';


export default function ConnectFour(props) {
  
  return (
    <Box 
      width='100vw' 
      height='100vh'
      bgcolor={theme.palette.common.black}
      color="common.white"
      zIndex={9000}
    >
      <Typography variant='h1' mt={15}> Connect Four Page</Typography>

    </Box>
  )
}