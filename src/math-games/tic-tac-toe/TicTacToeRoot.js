import React from 'react'
import { Outlet } from 'react-router-dom';

import { 
  Container, 
  Box, 
} from '@mui/material';
import theme from '../../theme';


export default function TicTacToeRoot(props) {
  
  return (
    <Box 
      border='solid red 2px'
      width='100vw' 
      height='calc(100vh - 96px)'
      overflow='hidden'
      bgcolor={theme.palette.common.black}
      color={theme.palette.common.white}
    >
      <Container maxWidth='sm' disableGutters >
        <Outlet />
      </Container>
    </Box>
  )
}

