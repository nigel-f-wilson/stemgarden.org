import React from 'react'
import { Box, Typography } from '@mui/material';

export default function Quote(props) {
  const { quote, personName, relationship } = props
  return (
    <Box pt={1} display='flex' flexDirection='column' >
      <Typography  variant="body1" align='justify' color='white' >
        "{quote}"
      </Typography>
      <Box  display='inline-block' margin='0 0 0 auto' >
        <Typography  variant="body1" align='left' color='white' >
          {personName}
        </Typography>
        <Typography  variant="body2" align='left' color='white' >
          {relationship}
        </Typography>
      </Box>
    </Box>
  )
}