import React, { useContext } from 'react'
import { Box, Typography, Zoom } from '@mui/material'

// CONTEXT 
import { ConnectFourContext } from '../ConnectFourContext';

export function InfoHeaderRow(props) {
  const { gameIsOver, gameStatus, gameBoardConstants } = useContext(ConnectFourContext)
  const { oneSeventh } = gameBoardConstants

  let message = ""
  if (gameIsOver) {
    message = (gameStatus === "playerOneWins" ? "Red Wins!" : "Yellow Wins!")
  }
  
  return (
    <Box id='infoHeaderRow'
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: oneSeventh,
        zIndex: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Zoom in={message !== ""} style={{ transitionDelay: '300ms' }} >
        <Typography color='connectFour.text' variant='h2' align='center' >
          {message}
        </Typography>
      </Zoom>
    </Box>
  )
}