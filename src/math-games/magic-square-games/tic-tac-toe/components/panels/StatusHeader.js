import React from 'react';

import { status } from "../../../magicSquareGameSolution";

// MUI Components
import { Typography } from '@mui/material';

export default function StatusHeader(props) {
  const { moveList, } = props
  
  const gameStatus = status(moveList);

  function statusMessage(gameStatus) {
    switch (gameStatus) {
      case "xWins":
        return "Game Over. X Wins!"
      case "oWins":
        return "Game Over. O Wins!"
      case "draw":
        return "Game Over! Draw."
      case "xNext":
        return "X's turn."
      case "oNext":
        return "O's turn."
      default:
        return "Error";
    }
  }

  return (
    <Typography pt={2} color="common.white" align='center' component='h1' variant='h4' noWrap gutterBottom>
      {statusMessage(gameStatus)}
    </Typography>
  )
}

