import React, { useContext } from 'react'
import { Box } from '@mui/material'
import { ConnectFourContext } from "../ConnectFourContext";

export function RoundedBorder(props) {
  const { gameBoardConstants } = useContext(ConnectFourContext)
  const { oneSeventh, sixSevenths } = gameBoardConstants
  
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
