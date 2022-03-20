import React from 'react'

import { 
  Container, 
  Box, 
  Typography } from '@mui/material';
import theme from '../../theme';


export default function PlayWithCoach(props) {
  
  return (
    <Box 
      border='solid red 2px'
      width='100vw' 
      height='calc(100vh - 96px)'
      overflow='hidden'
      bgcolor={theme.palette.common.black}
      color={theme.palette.common.white}

      zIndex={9000}
    >
    <Container maxWidth='md'>
      <Typography variant='h1'  > Play With Coach Page</Typography>

    </Container>

    </Box>
  )
}

