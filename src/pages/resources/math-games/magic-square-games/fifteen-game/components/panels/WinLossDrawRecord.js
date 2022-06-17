import React from 'react';
import { Box, Typography } from '@mui/material';

export default function WinLossDrawRecord(props) {
  const { 
    winLossDrawRecord,
    humanGoesFirst, 
    playMode
  } = props

  const gameNumber = winLossDrawRecord.reduce((prevTotal, score) => prevTotal + score, 0)

  let playerOne = ""
  let playerTwo = ""
  
  if (playMode === "playVsFriend") {
    if (gameNumber % 2 === 0) {
      playerOne = <Box>"X - Player One"</Box>
      playerTwo = "O - Player Two"
    }
    else {
      playerOne = "O - Player One"
      playerTwo = "X - Player Two"
    }
  }
  else if (playMode === "playVsBot") {
    if (humanGoesFirst) {
    playerOne = "X Human"
    playerTwo = "O Bot"
  }
  else {
    playerOne = "O Human"
    playerTwo = "X Bot"
  }
  }
  else {
    console.error("Invalid value of playMode passed to WinLossDrawRecord");
  }  
  
  

  return (
    <Box display='flex' flexDirection='column' px='25%' >
      <Box display='flex' justifyContent='space-between' >
        <Typography align='left' variant='h5' >
          {playerOne}:
        </Typography>
        <Typography align='right' variant='h5' >
          {winLossDrawRecord[0]}
        </Typography>
      </Box> 
      <Box display='flex' justifyContent='space-between' >
        <Typography align='left' variant='h5' >
          {playerTwo}:
        </Typography>
        <Typography align='right' variant='h5' >
          {winLossDrawRecord[1]}
        </Typography>
      </Box> 
      <Box display='flex' justifyContent='space-between' >
        <Typography align='left' variant='h5' >
          Drawn:
        </Typography>
        <Typography align='right' variant='h5' >
          {winLossDrawRecord[2]}
        </Typography>
      </Box> 
    </Box>  
  )
}


