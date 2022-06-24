import React from 'react';
import { Box, Typography } from '@mui/material';

export default function WinLossDrawRecord(props) {
  const { 
    gameNumber,
    winLossDrawRecord,
    game = "fifteen-game",
    playMode = "play-vs-friend",
    humanGoesFirst, 
  } = props

  let playerOne = ""
  let playerTwo = ""
  
  if (game === "tic-tac-toe") {
    if (playMode === "play-vs-friend") {
      if (gameNumber % 2 === 1) {
        playerOne = <Box>"X - Player One"</Box>
        playerTwo = "O - Player Two:"
      }
      else {
        playerOne = "O - Player One:"
        playerTwo = "X - Player Two:"
      }
    }
    else if (playMode === "play-vs-bot") {
        if (humanGoesFirst) {
        playerOne = "X Human:"
        playerTwo = "O Bot:"
      }
      else {
        playerOne = "O Human:"
        playerTwo = "X Bot:"
      }
    }
    else {
      console.error("Invalid value of playMode passed to WinLossDrawRecord");
    }  
  }
  else if (game === "fifteen-game") {
    if (playMode === "play-vs-friend") {
      if (gameNumber % 2 === 1) {
        playerOne = <PlayerRow label="Player One" goesFirst={true} score={winLossDrawRecord[0]} />
        playerTwo = <PlayerRow label="Player Two" goesFirst={false} score={winLossDrawRecord[1]} />
      }
      else {
        playerOne = <PlayerRow label="Player One" goesFirst={false} score={winLossDrawRecord[0]} />
        playerTwo = <PlayerRow label="Player Two" goesFirst={true} score={winLossDrawRecord[1]} />
      }
    }
    else if (playMode === "play-vs-bot") {
      if (humanGoesFirst) {
        playerOne = <PlayerRow label="Human" goesFirst={true} score={winLossDrawRecord[0]} />
        playerTwo = <PlayerRow label="Bot" goesFirst={false} score={winLossDrawRecord[1]} />
      }
      else {
        playerOne = <PlayerRow label="Human" goesFirst={false} score={winLossDrawRecord[0]} />
        playerTwo = <PlayerRow label="Bot" goesFirst={true} score={winLossDrawRecord[1]} />
      }
    }
    else {
      console.error(`Invalid value of playMode passed to WinLossDrawRecord: ${playMode}`);
    }  
  }
  
  function PlayerRow(props) {
    const { label, goesFirst, score } = props
    return (
      <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='center' >
        <ColorTile goesFirst={goesFirst} /> 
        <Typography align='left' variant='h5' children={label} />
        <Typography align='right' variant='h5' marginLeft='auto' children={score} />
          
      </Box>
    )
  } 


  function ColorTile(props) {
    const { goesFirst } = props
    const bgColor = (goesFirst === true) ? "magicSquareGames.playerOne" : (goesFirst === false) ? "magicSquareGames.playerTwo" : "transparent"

    return (
      <Box 
        width='1.2rem'
        height='1.2rem'
        borderRadius='15%'
        margin='0 .5rem 0 0'
        backgroundColor={bgColor}
      />
    )
  } 
  
  

  return (
    <Box display='flex' flexDirection='column' px='25%' >
      {/* <PlayerRow label="Player One" goesFirst={true} score={winLossDrawRecord[0]} /> */}
      {/* <PlayerRow label="Player Two" goesFirst={false} score={winLossDrawRecord[1]} /> */}
      {playerOne}
      {playerTwo}
      <PlayerRow label="Drawn" goesFirst={undefined} score={winLossDrawRecord[2]} />
    </Box>  
  )
}


