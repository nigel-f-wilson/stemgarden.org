import React from 'react'

import { 
  Container, 
  Box, 
  Typography } from '@mui/material';
import theme from '../../theme';


export default function TicTacToeWelcome(props) {
  
  return (
    <Box 
      border='solid red 2px'
      width='100%' 
      height='calc(100vh - 96px)'
      overflow='hidden'
      bgcolor={theme.palette.common.black}
      color={theme.palette.common.white}
    >
      <Container maxWidth='sm'>
        <Typography variant='h1'  > Welcome Page</Typography>

      </Container>
    </Box>
  )
}

