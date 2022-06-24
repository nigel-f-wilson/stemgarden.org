import React from 'react';
import { Box, Typography } from '@mui/material';

import { status } from "../../../magicSquareHelpers";

export default function StatusHeader(props) {
  const { 
    moveList, 
    playMode, // 
    gameNumber,
    humanGoesFirst 
  } = props

  console.assert((playMode === "play-vs-friend" || playMode === "play-vs-bot"), `Status Header recieved invalid playMode: ${playMode}`)

  
  let message = "Error in switch."
  const gameStatus = status(moveList);

  
  if (playMode === "play-vs-friend") {
    const whoFirstThisGame = (gameNumber % 2 === 1) ? "Player One" : "Player Two"
    const whoSecondThisGame = (gameNumber % 2 === 1) ? "Player Two" : "Player One"
    const playerOneWentFirst = (whoFirstThisGame === "Player One")
    const itsTheFirstPlayersTurn = (moveList.length % 2 === 0)
    const whoseTurnNow = playerOneWentFirst ? 
      (itsTheFirstPlayersTurn ? "Player One" : "Player Two") :
      (itsTheFirstPlayersTurn ? "Player Two" : "Player One")

    
    if (moveList.length === 0) {
      message = `${whoseTurnNow} goes first.`
    }
    else {
      switch (gameStatus) {
      case "xWins":
        message = `${whoFirstThisGame} Wins!`
        break;
      case "oWins":
        message = `${whoSecondThisGame} Wins!`
        break;
      case "draw":
        message = `Game Over! Draw.`
        break;
      case "xNext":
        message = `${whoFirstThisGame}'s turn.`
        break;
      case "oNext":
        message = `${whoSecondThisGame}'s turn.`
        break;
      default:
        message = "error" 
      }
    }
    
    
    
  }
  else if (playMode === "play-vs-bot") {
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
    default:
      message = "error" 
    }
  }
  else {
  }
    
  return (
    <Box>
      <Typography 
        children={`Game ${gameNumber}:`}
        color="common.white" 
        align='center' 
        variant='h4' 
        pt={2}
        noWrap 
      />
      <Typography 
        children={message}
        color="common.white" 
        align='center' 
        variant='h4' 
        gutterBottom
        noWrap 
      />
    </Box>
  )
}
