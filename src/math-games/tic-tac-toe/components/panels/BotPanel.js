import React from 'react';

import { Box, Container, Button, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';

import HomeButton from "../buttons/HomeButton";

// Logic
import { gameOver, status } from "../../logic/gameLogic";

export default function BotPanel(props) {
  const { 
    moveList, 
    humanGoesFirst, 
    newGame, 
    difficultyMode, 
    changeDifficultyMode, 
    letBotGoFirst,
    winLossDrawRecord,
    gameNumber 
  } = props

  const DifficultyModeButton = (props) => {
    const { mode } = props
    const selected = (mode === difficultyMode)
    return (
      <Button
        label={<Typography children={mode} />}
        children={mode}
        sx={{flexGrow: 1, mx: 1, border: selected ? 'solid white 3px' : 'none' }}
        variant={'contained'}
        onClick={() => changeDifficultyMode(mode)}
      />
    )
  }
  const NewGameButton = (props) => {
    const { gameOver, newGame } = props
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={() => newGame()}
        disabled={!gameOver}
        sx={{ flexGrow: 2, mx: 1 }}
      >
        <Box mr={2} display="flex" alignContent="center" >
          <FontAwesomeIcon icon={faRotateLeft} size='lg' />
        </Box>
        Play&nbsp;Again!
      </Button>
    )
  }
  const BotGoFirstButton = () => {
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={() => letBotGoFirst()}
        disabled={moveList.length !== 0}
        sx={{ flexGrow: 2, mx: 1 }}
      >
        Let&nbsp;Bot&nbsp;Go&nbsp;First
      </Button>
    )
  }

  const StatusHeader = () => {
    const gameStatus = status(moveList);
    let message = `Game Number ${gameNumber}`
    switch (gameStatus) {
      case "xWins":
        message = (humanGoesFirst) ? "Game Over. Human Wins!" : "Game Over. Bot Wins!"
        break
      case "oWins":
        message = (humanGoesFirst) ? "Game Over. Bot Wins!" : "Game Over. Human Wins!" 
        break
      case "draw":
        message = "Game Over! Draw."
        break
      case "xNext":
        message = (humanGoesFirst) ? "Human's Turn" : "Bot's Turn" 
        break
      case "oNext":
        message = (humanGoesFirst) ? "Bot's Turn" : "Human's Turn" 
        break
      default:
    }
    return (
    <Typography 
      children={message} 
      pt={2} 
      color="common.white" 
      align='center' 
      component='h1' 
      variant='h4' noWrap gutterBottom />
    )
  }

  const WinLossDrawRecord = () => {
    // const {  } = props
    let playerOne = ""
    let playerTwo = ""
    if (humanGoesFirst) {
      playerOne = "X Human"
      playerTwo = "O Bot"
    }
    else {
      playerOne = "O Human"
      playerTwo = "X Bot"
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

  return (
    <Container 
      sx={{ 
        width: '100%',
        height: '45%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      disableGutters
    >
      <StatusHeader />
      <WinLossDrawRecord />
        
      <Box>
        <Box mb={2} height={40} display='flex' justifyContent='space-between' > 
          <DifficultyModeButton mode='easy' />
          <DifficultyModeButton mode='medium' />
          <DifficultyModeButton mode='hard' />
        </Box>         
        <Box display='flex' justifyContent='space-between' height={40} >
          <BotGoFirstButton
            letBotGoFirst={letBotGoFirst}
          />
          <NewGameButton
              gameOver={gameOver(moveList)}
              moveList={moveList}
              newGame={newGame}
          />
          <HomeButton
              gameOver={false}
              moveList={moveList}
              handleClick={() => {console.log(`The HOME button is not built yet`)}}
          />
        </Box>
      </Box>
    </Container>
  )
}


