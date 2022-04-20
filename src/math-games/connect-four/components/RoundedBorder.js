import React from 'react'
import { Box } from '@mui/material'

export function RoundedBorder(props) {
  const { oneSeventh, sixSevenths } = props
  
  return (
    <Box 
      id='rounded_border'
      boxSizing='content-box'
      position='absolute'
      top={oneSeventh}
      left='-9px'
      width='calc(100% - 2px)'
      height={sixSevenths}
      border="10px solid"
      borderColor="board.main"
      borderRadius="10px"
      borderTop={0}
    />
  )
}
