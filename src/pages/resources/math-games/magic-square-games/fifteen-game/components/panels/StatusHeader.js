import React from 'react';

import { status } from "../../../magicSquareHelpers";

// MUI Components
import { Typography } from '@mui/material';

export default function StatusHeader(props) {
  const { moveList, } = props
  
  const gameStatus = status(moveList);

  function statusMessage(gameStatus) {
    switch (gameStatus) {
      case "xWins":
        return "Player One Wins!"
      case "oWins":
        return "Player Two Wins!"
      case "draw":
        return "Game Over! Draw."
      case "xNext":
        return "Player One's turn."
      case "oNext":
        return "Player Two's turn."
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

