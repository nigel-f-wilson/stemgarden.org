import React from 'react';
import { Typography } from '@mui/material';

import { status } from "../../../magicSquareHelpers";

export default function StatusHeader(props) {
  const { moveList, playMode, humanGoesFirst } = props
  console.assert((playMode === "playVsBot" || playMode === "playVsFriend"), `StatusHeader recieved invalid playMode prop: ${playMode}`)
  
  let message = "Error in switch."
  const gameStatus = status(moveList);

  if (playMode === "playVsFriend") {
    switch (gameStatus) {
    case "xWins":
      message = "Player One Wins!"
      break;
    case "oWins":
      message = "Player Two Wins!"
      break;
    case "draw":
      message = "Game Over! Draw."
      break;
    case "xNext":
      message = "Player One's turn."
      break;
    case "oNext":
      message = "Player Two's turn."
      break;
    }
  }
  else {
    switch (gameStatus) {
    case "xWins":
      message = (humanGoesFirst) ? "Game Over. Human Wins!" : "Game Over. Bot Wins!"
      break;
    case "oWins":
      message = (humanGoesFirst) ? "Game Over. Bot Wins!" : "Game Over. Human Wins!" 
      break;
    case "draw":
      message = "Game Over! Draw."
      break;
    case "xNext":
      message = (humanGoesFirst) ? "Human's Turn" : "Bot's Turn" 
      break;
    case "oNext":
      message = (humanGoesFirst) ? "Bot's Turn" : "Human's Turn"
      break;
    }
  }
    
  return (
    <Typography 
      children={message}
      color="common.white" 
      align='center' 
      component='h1' 
      variant='h4' 
      pt={2}
      gutterBottom
      noWrap 
    />
  )
}
